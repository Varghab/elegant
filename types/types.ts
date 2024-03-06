import { AddressType, WishlistType } from "@/lib/database/models/user.model";

// Products
export type CreateProductParams = {
    productName: string;
    productDescription: string;
    price: number;
    discount?: number;
    quantity: number;
    thumbnail: string;
    productImages: { productUrl: string }[];
    colors: { color: string; productUrl: string }[];
    category: string[];
    faq?: { question: string; answer: string }[];
    createdAt: Date;
    rating?: {
        averageRating?: number;
        ratingsCount?: number;
        totalRatings?: number;
    };
}

export type GetAllProductParams = {
    category: string,
    price:{
        min?: number,
        max?: number
    }
}

export type UpdataProductParams = {
    updateDetails: {
        productName: string;
        productDescription: string;
        price: number;
        discount?: number;
        quantity: number;
        thumbnail: string;
        productImages: { productUrl: string }[];
        colors: { color: string; productUrl: string }[];
        category: string[];
        faq?: { question: string; answer: string }[];
    },
    productId: string
}

// Orders



// Reviews
export type CreateReviewParams = {
    review: string,
    rating: number,
    productId:string,
    userId: string
}

export type UpdateReviewParams = {
    reviewId:string
    review?:string,
    userId:string,
    isLiked?:boolean,
    rating?: number,
    reply?: {
        review: string,
        user: string,
    }
}

// Users

export type CreateUserParams = {
    clerkId:string,
    email: string,
    displayName: string,
    fullName: string,
}

export type UpdateUserParams = {
    userId: string
    firstName?:string,
    lastName?:string,
    displayName?:string,
    fullName?:string,
    wishlist?: [WishlistType],
    address?: [AddressType],
    // oldPassword:string,
    // newPassword:string,
}


//Data

export type FeatureData = {
    id:number
    image: string
    label:string
    labelDescription:string
}

export type HeadingProps = {
    heading: string
    cta:string
}