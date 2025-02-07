import Cutter from "@/components/player-cutter/Cutter";
import BackBtn from "@/components/ui/button/BackBtn";
import React from "react";

const Page = () => {
  return (
    <div className='flex  justify-center mt-[40px] h-full relative gap-10'>
      <BackBtn />
      <Cutter />
    </div>
  );
};

export default Page;
