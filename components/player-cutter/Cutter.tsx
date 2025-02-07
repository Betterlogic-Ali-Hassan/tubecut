"use client";
import React, { useState } from "react";
import Video from "./Video";
import Divider from "../Divider";
import Button from "../ui/button/Button";
import styles from "./cutter.module.css";
import VideoControls from "./videoDuration/VideoControls";
const Cutter = () => {
  const [duration, setDuration] = useState(0);
  const [range, setRange] = useState([0, 100]);
  const [seeking, setSeeking] = useState(false);
  const handleDuration = (duration: number) => {
    setDuration(duration);
    setRange([0, duration]);
  };
  const handleRangeChange = (newRange: number[]) => {
    setRange(newRange);
  };
  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
  };

  return (
    <section className={styles.wrapper}>
      <Video onDuration={handleDuration} seeking={seeking} />
      <Divider className='!w-full my-4' />
      <VideoControls
        duration={duration}
        range={range}
        onRangeChange={handleRangeChange}
        onSeekMouseDown={handleSeekMouseDown}
        onSeekMouseUp={handleSeekMouseUp}
      />

      <Button className=' !mt-6'>Apply</Button>
    </section>
  );
};

export default Cutter;
