import mongoose, { Schema, model, models } from "mongoose";
import { User } from "./user.model";

// Schema
export const nestedReviewSchema = {
    review:{
        type:String,
        minLength:[1, "Review should be of atleast 1 character"],
        maxLength:[1500, "Review shouldn't be more than 1500 character"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: User
    },
    // likes: Number,
}

export const ReviewSchema = new Schema({
    review:{
        type:String,
        minLength:[1, "Review should be of atleast 1 character"],
        maxLength:[1500, "Review shouldn't be more than 1500 character"],
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: User,
        required: true
    },
    likedByUsers:[mongoose.Types.ObjectId],
    likes: {
        type:Number
    },
    rating: {
        type: Number,
        required:[true, "Please rate the product."]
    },
    nestedReviews: {
        type: [nestedReviewSchema]
    }
})


export const Review = models.Review || model('Review', ReviewSchema);