"use client";

import type React from "react";
import { formatTime } from "@/lib/format-time";
import { TimeTooltip } from "./TimeTooltip";
import { ProgressSegment } from "./ProgressSegment";

interface ProgressBarProps {
  duration: number;
  currentTime: number;
  sliderValue: [number, number];
  handleProgressBarClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleProgressBarHover: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleProgressBarLeave: () => void;
  hoverTime: number | null;
  hoverPosition: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  duration,
  currentTime,
  sliderValue,
  handleProgressBarClick,
  handleProgressBarHover,
  handleProgressBarLeave,
  hoverTime,
  hoverPosition,
}) => {
  const getPercentage = (value: number) => (value / (duration || 1)) * 100;

  return (
    <div className='relative'>
      <div
        className='h-[15px] w-full relative overflow-hidden cursor-pointer bg-black  '
        onClick={handleProgressBarClick}
        onMouseMove={handleProgressBarHover}
        onMouseLeave={handleProgressBarLeave}
      >
        <ProgressSegment
          position='left'
          width={getPercentage(sliderValue[0])}
        />
        <ProgressSegment
          position='right'
          width={getPercentage(duration - sliderValue[1])}
        />
        <ProgressSegment
          className='bg-[#50C878]  z-10'
          width={getPercentage(currentTime)}
        />
      </div>

      {hoverTime !== null && (
        <TimeTooltip time={formatTime(hoverTime)} position={hoverPosition} />
      )}
    </div>
  );
};

export default ProgressBar;
