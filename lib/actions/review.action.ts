import { CreateReviewParams, UpdateReviewParams } from "@/types/types";
import { connectToDatabase } from "../database/db.connection";
import { User } from "../database/models/user.model";
import { Review } from "../database/models/review.model";
import { Product } from "../database/models/product.model";

export async function createReview({review, rating, productId, userId}: CreateReviewParams){
    try {
        await connectToDatabase();
        const product = await User.findById({_id:userId}).select('orders');
        const isValidToReview = product.includes(product);
        if(!isValidToReview){
            throw new Error("Please purchase this product first to review.");
        }
        const userReview = {
            review,
            rating,
            user: userId,
        }

        const feedback = await Review.create(userReview);
        if(feedback){
            const product = await Product.findByIdAndUpdate({_id: productId}, {$addToSet:{reviews: feedback._id}}, {new: true});
            if(product){
                return {
                    success: true,
                    data: product
                }
            }
        }
        throw new Error("Review not submitted, please try again later.")

    } catch (error:any) {
        console.log(error.message);
        
    }
}

export async function updateReview(UpdateDetails:UpdateReviewParams){
    try {
        await connectToDatabase();
        const { reviewId, userId, review, isLiked, rating, reply } = UpdateDetails;
        let updateObj:any = {};
        if(review) updateObj.review = review;
        if(rating) updateObj.rating = rating;
        if(isLiked!=undefined){
            updateObj[isLiked ? '$addToSet' : '$pull'] = { likedByUsers: userId };
        }
        if(reply){
            updateObj.$addToSet = { nestedReviews:reply}
        }
        const updatedReview = await Review.findOneAndUpdate({_id:reviewId}, updateObj, {new:true});
        if(updatedReview){
            return {
                success: true,
                data: updatedReview
            }
        }

        throw new Error("Review updation failed.")

    } catch (error:any) {
        console.log(error.message);
        
    }
}

export async function deleteReview(reviewId:string){
    try {
        await connectToDatabase();
        const deletedReview = await Review.findByIdAndDelete({_id:reviewId});
        if(deletedReview){
            return {
                success: true,
            }
        }
        throw new Error("Error while deleting the review.")
    }catch(error:any) {
        console.log(error.message);
    
    }
}