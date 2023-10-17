import Category from "@/components/Category";
import Review from "@/components/Review";
import Header from "../Header";
import Footer from "../Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "audiophile headphones",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <div className="mt-[4rem]">
        <Header />
        {children}
        <Category />
        <Review />
        <Footer />
      </div>
    );
}