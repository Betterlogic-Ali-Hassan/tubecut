"use client";
import React from "react";
import ReactPlayer from "react-player";
interface VideoPlayerProps {
  onDuration: (duration: number) => void;
  seeking: boolean;
}
const Video = ({ onDuration, seeking }: VideoPlayerProps) => {
  return (
    <>
      <ReactPlayer
        url='https://www.youtube.com/embed/cIPeJmDrc_g?si=ftIBVUMuRBfFQvIK '
        className=' h-[315px] w-[560px] overflow-hidden'
        onDuration={onDuration}
        playing={seeking}
      />
      <h4 className='text-xl font-inter mt-4 text-[#ffffffe5] tracking-wide'>
        How Pakistani Family Vloggers Are Fooling You
      </h4>
    </>
  );
};

export default Video;
