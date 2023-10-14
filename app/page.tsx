import Image from 'next/image'
import Hero from '../components/Hero';
import Category from '../components/Category';
import BannerMain from '../components/BannerMain';
import BannerMedium from '../components/BannerMedium';
import BannerSmall from '../components/BannerSmall';
import Review from '../components/Review';

export default function Home() {
  return (
    <main className='flex flex-col justify-between'>
      <Hero />
      <Category />
      <BannerMain />
      <BannerMedium />
      <BannerSmall />
      <Review/>
    </main>
  )
}
