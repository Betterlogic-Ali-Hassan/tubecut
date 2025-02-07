import Faqs from "@/components/faqs/Faqs";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Highlights from "@/components/highlights/Highlights";
import Overlay from "@/components/overlay/Overlay";

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center gap-[120px]  relative'>
        <Hero />
        <Highlights />
        <Features />
      </div>
      <Faqs />
      <Overlay className='top-[-8px]' />
      <Overlay className='top-[610px]' />
      <Overlay className='top-[1250px]' />
    </>
  );
}
