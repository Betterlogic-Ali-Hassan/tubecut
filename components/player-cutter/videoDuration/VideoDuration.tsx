import React from "react";
import styles from "./videoDuration.module.css";
import { RxStopwatch } from "react-icons/rx";

const VideoDuration = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-3'>
        <h4 className='text-white text-[15px]'>Duration</h4>
        <span className='text-text-foreground text-sm'>05:15.8</span>
      </div>
      <div className={styles["duration-wrapper"]}>
        <div className='flex items-center gap-3'>
          <RxStopwatch size={20} />
          <span className='text-text-foreground'>Start</span>
          <span className='text-[15px]'>01:26.6</span>
        </div>
        <div className='w-[1px] h-[30px] bg-[#44444A]'></div>
        <div className='flex items-center gap-3'>
          <span className='text-text-foreground'>End</span>
          <span className='text-[15px]'>01:26.6</span>
          <RxStopwatch size={20} />
        </div>
      </div>
    </div>
  );
};

export default VideoDuration;
