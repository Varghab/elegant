"use client"
import { createProduct, getAllProducts } from "@/lib/actions/product.action";
import { connectToDatabase } from "@/lib/database/db.connection";
import { SignInButton, SignOutButton, UserButton, useAuth, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const {signOut} = useClerk();
  const router = useRouter();
  return (
    <main className="flex gap-4 p-24">
      <h1>Let's get started!</h1>
      <button onClick={()=>signOut(()=> router.push('/login'))} className="py-2 px-4 bg-gray-100">
        Sign out
      </button>
    </main>
  );
}
