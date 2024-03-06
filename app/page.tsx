import Blogs from "@/components/shared/Blogs";
import CategoryGrid from "@/components/shared/CategoryGrid";
import Features from "@/components/shared/Features";
import ImageSlider from "@/components/shared/ImageSlider";
import Newsletter from "@/components/shared/Newsletter";
import ProductsCollection from "@/components/shared/ProductsCollection";
import Sale from "@/components/shared/Sale";
import { createProduct, getAllProducts } from "@/lib/actions/product.action";
import { connectToDatabase } from "@/lib/database/db.connection";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useAuth,
  useClerk,
} from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FeatureData = [
  {
    id:1,
    image: "/assets/icons/delivery.png",
    label: "Free Shipping",
    labelDescription: "Orders above $200"
  },
  {
    id:2,
    image: "/assets/icons/money.png",
    label: "Money-back",
    labelDescription: "30 days guarantee"
  },
  {
    id:3,
    image: "/assets/icons/lock.png",
    label: "Secure Payments",
    labelDescription: "Secured by Stripe"
  },
  {
    id:4,
    image: "/assets/icons/call.png",
    label: "24/7 Support",
    labelDescription: "Phone and Email support"
  },
]

const slideImages = [
  {
    url: "/assets/images/slider1.png",
    caption: "Slide 1",
  },
  {
    url: "/assets/images/slider2.jpg",
    caption: "Slide 2",
  },
  {
    url: "/assets/images/slider3.jpg",
    caption: "Slide 3",
  },
];

export const BlogData = [
  {
    id: 1,
    blogImage: "/assets/images/blog1.png",
    blogTitle: "7 ways to decor your home"
  },
  {
    id: 2,
    blogImage: "/assets/images/blog2.png",
    blogTitle: "Kitchen Organization"
  },
  {
    id: 3,
    blogImage: "/assets/images/blog3.png",
    blogTitle: "Decor your bedroom"
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="wrapper ">
        <ImageSlider images={slideImages} />
        <div className="py-10 md:flex-between">
          <h1 className="tracking-tight text-[2.5rem] w-full lg:text-[4rem] font-[700] leading-[2.8rem] md:leading-[3.5rem]">Simply Unique<span className="text-secondary">/</span><br/> Simply Better.</h1>
          <p className="text-secondary mt-4 md:mt-0 p-regular-20 w-full sm:max-w-[30rem]"><span className="font-bold">3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
        </div>
        <CategoryGrid />
        <ProductsCollection heading="New Arrivals" cta="More Products" />
        <Features data={FeatureData} />
      </div>
      <div>
        <Sale />
      </div>
      <div className="wrapper">
        <Blogs data={BlogData} />
      </div>
      <div>
        <Newsletter />
      </div>
    </main>
  );
}
