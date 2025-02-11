"use client";
import React, { RefObject, useState } from "react";
import ReactPlayer from "react-player";
import ProgressBar from "./progressbar/Progressbar";
interface VideoPlayerProps {
  handleDuration: (duration: number) => void;
  seeking: boolean;
  handleProgress: (progress: { playedSeconds: number; played: number }) => void;
  ref: RefObject<ReactPlayer | null>;
  setCurrentTime: (time: number) => void;
  onProgressChange: (newProgress: number) => void;
  range: [number, number];
  currentTime: number;
  duration: number;
}
const Video = ({
  duration,
  handleDuration,
  seeking,
  handleProgress,
  ref,
  currentTime,
  setCurrentTime,
  onProgressChange,
  range,
}: VideoPlayerProps) => {
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState(0);
  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const clickedTime = (x / rect.width) * duration;
    const newTime = Math.max(range[0], Math.min(range[1], clickedTime));
    setCurrentTime(newTime);
    onProgressChange(newTime);
  };

  const handleProgressBarHover = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const hoverTime = (x / rect.width) * duration;
    setHoverTime(hoverTime);
    setHoverPosition(x);
  };

  const handleProgressBarLeave = () => {
    setHoverTime(null);
  };
  return (
    <>
      <div className='relative w-full max-w-[636px] mx-auto aspect-video'>
        <ReactPlayer
          url='https://www.youtube.com/embed/cIPeJmDrc_g?si=ftIBVUMuRBfFQvIK '
          width='100%'
          height='100%'
          className='max-w-[636px] max-h-[358px]'
          onDuration={handleDuration}
          onProgress={handleProgress}
          progressInterval={100}
          playing={!seeking}
          ref={ref}
        />
      </div>

      <ProgressBar
        duration={duration}
        currentTime={currentTime}
        sliderValue={range}
        handleProgressBarClick={handleProgressBarClick}
        handleProgressBarHover={handleProgressBarHover}
        handleProgressBarLeave={handleProgressBarLeave}
        hoverTime={hoverTime}
        hoverPosition={hoverPosition}
      />
      <h4 className='sm:text-xl text-base font-inter mt-4 text-[#ffffffe5] tracking-wide'>
        How Pakistani Family Vloggers Are Fooling You
      </h4>
    </>
  );
};

export default Video;
