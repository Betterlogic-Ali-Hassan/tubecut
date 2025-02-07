import React from "react";
import Divider from "../Divider";

const Footer = () => {
  return (
    <footer className='flex items-center justify-center gap-6 flex-col pb-4 mt-auto'>
      <Divider />
      <p>
        <span className='overlay'>&copy; 2022 tubecut.</span>
      </p>
    </footer>
  );
};

export default Footer;
