import mongoose, { Schema, model, models } from "mongoose";
import { User } from "./user.model";

const itemSchema = {
    itemName: String,
    quantity: Number,
    price: String,
    discountedPrice: String
}

const OrderSchema = new Schema({
    paymentId: {
        type:String,
    },
    user: {
        type:mongoose.Types.ObjectId,
        ref:User
    },
    items:{
        type:[itemSchema]
    },
    totalPrice: String,
    paymentMode: String,
    createdAt:{
        type:Date,
        default: Date.now
    }
});


export const Order = models.Order || model('Order', OrderSchema);