import Faqs from "@/components/faqs/Faqs";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Highlights from "@/components/highlights/Highlights";
import Overlay from "@/components/overlay/Overlay";

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center gap-[120px] h-full relative'>
        <Hero />
        <Highlights />
        <Features />
        {/* <div className='full-overlay absolute top-[50%] left-1/2'></div> */}
      </div>
      <Faqs />
      <Footer />
      <Overlay className='top-[-8px]' />
      <Overlay className='top-[610px]' />
      <Overlay className='top-[1250px]' />
    </>
  );
}
