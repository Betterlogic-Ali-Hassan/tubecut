import Cutter from "@/components/player-cutter/Cutter";
import BackBtn from "@/components/ui/button/BackBtn";
import React from "react";

const Page = () => {
  return (
    <div className='flex  justify-center min-[809px]:mt-[40px] mb-[40px] h-full relative '>
      <div className='flex max-[809px]:items-center max-[809px]:flex-col justify-center gap-10 max-[809px]:mb-[40px] max-sm:px-5'>
        <BackBtn />
        <Cutter />
      </div>
    </div>
  );
};

export default Page;
