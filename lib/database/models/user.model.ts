import mongoose, { InferSchemaType, Schema, model, models } from "mongoose";
import { Order } from "./order.model";

const wishlistSchema = {
    productName: String,
    productImage: String,
    color: String,
    price: String,
}

const addressSchema = {
    streetAddress:{
        type: String,
        minLength: [10, "Address should be of atleast 10 character"],
        maxLength:[100, "Address shouldn't exceed 100 character"]
    },
    country: String,
    city: String,
    state: String,
    zipcode: Number
}

type AddressType = {
    streetAddress:string;
    country:string,
    city:string,
    state:string,
    zipcode:number
}

function CheckAddressArrayLength(Address:AddressType[]){
    return Address.length < 4; 
}

export const UserSchema = new Schema({
    firstName:{
        type:String,
        minLength:[1, "First name should be of atleast 1 character"],
        maxLength:[60, "First name can't exceed 60 characters"]
    },
    lastName:{
        type:String,
        minLength: [1,"Last name should be of atleast 1 character"],
        maxLength: [60, "Last name can't exceed 60 characters"]
    },
    fullName:{
        type: String,
        required: true
    },
    displayName:{
        type: String,
        minLength:[1,"Display name should be of atleast 1 character"],
        maxLength:[12, "Display name can't exceed 12 characters"],
        required:true
    }, //Username
    email: {
        type:String,
        required:true,
        unique: true
    },
    wishlist: {
        type:[wishlistSchema],
    },
    address: {
        type: [addressSchema],
        validate:{
            validator: CheckAddressArrayLength,
            message: "You can add upto 4 addresses."
        }
    } ,
    createdAt:{
        type:Date,
        default: Date.now
    }

});


export const User = models.User || model('User', UserSchema);