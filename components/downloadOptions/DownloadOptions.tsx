import React from "react";
import Options from "./options/Options";
import Button from "../ui/button/Button";
const DownloadOptions = () => {
  return (
    <section className='flex flex-col  items-center mt-[40px] max-w-[600px] mx-auto '>
      <h1 className='self-start max-sm:px-6'>Downloads</h1>
      <Options />
      <div className='max-sm:px-6 w-full'>
        <Button>Try New Video</Button>
      </div>
    </section>
  );
};

export default DownloadOptions;
