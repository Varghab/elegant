import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const headerPayload = headers();
    const event = headerPayload.get('X-Strapi-Event');
    const payload = headerPayload
    console.log(req);
    return NextResponse.json({
        message:"successfully reached webhook"
    })
}