import React from "react";

const Video = () => {
  return (
    <>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/cIPeJmDrc_g?si=ftIBVUMuRBfFQvIK'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        className='rounded-lg border border-[#16181C]'
      ></iframe>
      <h4 className='text-xl font-inter mt-4 text-[#ffffffe5] tracking-wide'>
        How Pakistani Family Vloggers Are Fooling You
      </h4>
    </>
  );
};

export default Video;
