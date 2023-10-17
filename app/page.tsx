import Image from 'next/image'
import Hero from '../components/Hero';
import Category from '../components/Category';
import BannerMain from '../components/BannerMain';
import BannerMedium from '../components/BannerMedium';
import BannerSmall from '../components/BannerSmall';
import Review from '../components/Review';
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Header />
      <Hero />
      <Category />
      <BannerMain />
      <BannerMedium />
      <BannerSmall />
      <Review />
      <Footer />
    </main>
  );
}
