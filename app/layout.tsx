import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const almarai = Almarai({
  style:"normal",
  subsets:['arabic'],
  weight:['300','400','700']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{  
  return (
    <ClerkProvider>
    <html lang="en">
        <body className={almarai.className}>
          <Navbar />
            {children}
          <Footer />
          <Toaster />
        </body>
    </html>
    </ClerkProvider>
  );
}
