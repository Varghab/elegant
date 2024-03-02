import { CreateUserParams } from "@/types/types";
import { connectToDatabase } from "../database/db.connection";
import { User } from "../database/models/user.model";

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