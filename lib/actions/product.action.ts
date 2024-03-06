import { CreateProductParams, GetAllProductParams, UpdataProductParams } from "@/types/types";
import { connectToDatabase } from "../database/db.connection";
import { Product } from "../database/models/product.model";

export async function createProduct(product:CreateProductParams){
    try {
        await connectToDatabase();
        const data = await Product.create(product);
        if(data){
            return {success: true, data: data}
        }
        else throw new Error("Something went wrong creating the product")
    } catch (error:any) {
        console.log(error.message);
    }
}

export async function getAllProducts({category, price}:GetAllProductParams){
    try {
        await connectToDatabase();
        console.log(price);
        const categoryCondition = category.length > 0 ? {category:category} : {};
        const priceCondition = {
            price: {
                $gt: price.min || 0, 
                $lte: price.max || Infinity
            }
        };
        const condition = [categoryCondition, priceCondition];
        const query = Product.find().and(condition)
        const productCount = await Product.countDocuments().and(condition);
        const allProduct = await query;
        if(allProduct){
            return {
                success: true,
                data: {products: allProduct, productsCount: productCount}
            }
        }
        else throw new Error("Error fetching products!")
    } catch (error:any) {
        console.log(error.message);
    }
}

export async function searchProduct({search}:{search:string}){
    try {
        await connectToDatabase();
        const products = await Product.find({productName:{$regex:`/${search}/`, $options:'i'}}).limit(4);
        if(products){
            return {
                success: true,
                products
            }
        }
        else throw new Error('Search Error!')
    } catch (error:any) {
        console.log(error.message);
    }
}

export async function getProductById(id:string){
    try {
        await connectToDatabase();
        const product = await Product.findById({_id:id})
        if(product){
            return {
                success: true,
                product
            }
        }
        else throw new Error('Error while fetching product!')
    } catch (error:any) {
        console.log(error.message);
    }
}

export async function updateProduct({updateDetails, productId}: UpdataProductParams){
    try {
        await connectToDatabase();
        const updatedProduct = await Product.findByIdAndUpdate({_id: productId}, updateDetails, {new:true, runValidators:true});
        if(updatedProduct){
            return {
                success: true,
                data: updatedProduct
            }
        }
        throw new Error("Product updation failed.")
    } catch (error:any) {
        console.log(error.message);
        
    }
}

export async function deleteProduct(productId: string){
    try {
        await connectToDatabase();
        const deletedProduct = await Product.findByIdAndDelete({_id: productId});
        if(deletedProduct) return {success: true};
        throw new Error("Product deletion failed.");
    } catch (error:any) {
        console.log(error.message);
        
    }
}