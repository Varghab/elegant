import { CreateUserParams, UpdateUserParams } from "@/types/types";
import { connectToDatabase } from "../database/db.connection";
import { User } from "../database/models/user.model";
import { auth, clerkClient } from "@clerk/nextjs";

export async function createUser(UserDetails: CreateUserParams){
    try {
        await connectToDatabase();
        const user = await User.create(UserDetails);
        if(user){
            return {
                success: true,
                data: user
            }
        }
        throw new Error("Something went wrong while creating your account.")
    } catch (error:any) {
        console.log(error.message);
    }
}

export async function updataUser(UserUpdateDetails: UpdateUserParams){
    try {
        await connectToDatabase();
        const {userId} = UserUpdateDetails;
        const updatedUser = await User.findByIdAndUpdate({id:userId}, UserUpdateDetails , {
            returnDocument: 'after',
            new: true
        })
        if(updatedUser){
            return {
                success: true,
                data: updatedUser
            }
        }
        throw new Error("User updation failed.")
    } catch (error:any) {
        console.log(error.message);
        
    }
}

export async function deleteUser(id:string){
    try {
        await connectToDatabase();
        // Will implement later!
    } catch (error:any) {
        console.log(error.message);
        
    }
}