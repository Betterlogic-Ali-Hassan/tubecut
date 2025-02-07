import React from "react";
import styles from "./videoControls.module.css";
import { RxStopwatch } from "react-icons/rx";
import { Slider } from "@/components/ui/slider";
import { formatTime } from "@/lib/format-time";
interface VideoControlsProps {
  duration: number;
  range: number[];
  onRangeChange: (newRange: number[]) => void;
  onSeekMouseDown: () => void;
  onSeekMouseUp: () => void;
}
const VideoControls = ({
  duration,
  range,
  onRangeChange,
  onSeekMouseDown,
  onSeekMouseUp,
}: VideoControlsProps) => {
  return (
    <>
      <div className='flex items-center justify-between mb-3'>
        <h4 className='text-white text-[15px]'>Duration</h4>
        <span className='text-text-foreground text-sm'>
          {formatTime(duration)}
        </span>
      </div>
      <div className={styles["duration-wrapper"]}>
        <div className='flex items-center gap-3 flex-1'>
          <RxStopwatch size={20} />
          <span className='text-text-foreground'>Start</span>
          <span className='text-[15px]'>{formatTime(range[0])}</span>
        </div>
        <div className='flex-1 flex justify-center'>
          <div className='w-[1px] h-[30px] bg-[#44444A] '></div>
        </div>
        <div className='flex items-center gap-3 flex-1 justify-end'>
          <span className='text-text-foreground'>End</span>
          <span className='text-[15px]'>{formatTime(range[1])}</span>
          <RxStopwatch size={20} />
        </div>
      </div>
      <div className='mt-6'>
        <Slider
          min={0}
          max={duration}
          value={range}
          step={0.1}
          aria-label='Dual range slider'
          className=' rounded-lg'
          onValueChange={onRangeChange}
          onMouseDown={onSeekMouseDown}
          onMouseUp={onSeekMouseUp}
        />
      </div>
    </>
  );
};

export default VideoControls;
