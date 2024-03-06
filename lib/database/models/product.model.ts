import mongoose, { InferSchemaType, Schema, model, models } from "mongoose";
import { Review } from "./review.model";

const productImageSchema = {
    productUrl: String
}

const productFaqSchema = {
    question: String,
    answer: String
}

const productColorSchema = {
    color: String,
    productUrl: String
}

type ProductColor = {
    color:string,
    productUrl:string
};
type ProductImage = {productUrl:string}

function validateImageCount(images: ProductImage[]) {
    return images.length <= 4;
}

function validateColorCount(colors: ProductColor[]) {
    return colors.length <= 6;
}
// Schema
export const ProductSchema = new Schema({
    productName:{
        type: String,
        required: [true, "Product name is required"],
        minLength: [5, "Product title should be of atleast 5 characters"],
        maxLength: [80, "Product titlte shouldn't exceed 80 characters"]
    },
    productDescription:{
        type: String,
        required: [true, "Product description is required"]
    },
    price:{
        type: Number,
        required: true,
    },
    discount:{
        type: Number,
        validate: {
            validator: function(this:any, discountedPrice:Number){
                return discountedPrice <= this.price;
            },
            message: "Discounted price should not exceed the original price"
        }
    },
    quantity:{
        type: Number, 
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    productImages:{
        type: [productImageSchema],
        validate:{
            validator: validateImageCount,
            message: "You can upload up to 4 images"
        }
    },
    colors:{
        type: [productColorSchema],
        validate: {
            validator: validateColorCount,
            message: "You can have up to 6 colors"
        }
    },
    category: {
        type: [String], 
        validate: {
            validator: function(value:string[]){
                return value.length>0&&value.length<4
            },
            message: "Number of categories should be between 0 and 4"
        }
    },
    faq: {
        type: [productFaqSchema],
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    rating:{
        averageRating: Number,
        ratingsCount: Number,
        totalRatings: Number, 
    },
    reviews: {
        type: [mongoose.Types.ObjectId],
        ref: Review
    }
})

// export type ProductType = InferSchemaType<typeof ProductSchema>;


export const Product = models.Product || model('Product', ProductSchema)