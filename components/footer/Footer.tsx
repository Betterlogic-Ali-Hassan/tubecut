import React from "react";

const Footer = () => {
  return (
    <footer className='flex items-center justify-center gap-6 flex-col mb-4'>
      <div className='w-[294px] h-[2px] bg-[#16181C]'></div>
      <p>
        <span className='overlay'>&copy; 2022 tubecut.</span>
      </p>
    </footer>
  );
};

export default Footer;
