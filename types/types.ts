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

// Orders



// REviews



// Users

export type CreateUserParams = {
    clerkId:string,
    email: string,
    displayName: string,
    fullName: string,
}