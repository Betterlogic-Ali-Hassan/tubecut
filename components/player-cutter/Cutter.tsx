"use client";
import React, { useCallback, useRef, useState } from "react";
import Video from "./Video";
import Divider from "../Divider";
import Button from "../ui/button/Button";
import styles from "./cutter.module.css";
import VideoControls from "./videoDuration/VideoControls";
import ReactPlayer from "react-player";
const Cutter = () => {
  const [duration, setDuration] = useState(0);
  const [range, setRange] = useState<[number, number]>([0, 100]);
  const [seeking, setSeeking] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);
  const handleDuration = (duration: number) => {
    setDuration(duration);
    setRange([0, duration]);
  };
  const handleProgress = useCallback(
    (state: { played: number; playedSeconds: number }) => {
      if (!seeking) {
        setCurrentTime(state.playedSeconds);
        if (state.playedSeconds >= range[1]) {
          playerRef.current?.seekTo(range[0], "seconds");
        }
      }
    },
    [seeking, range]
  );

  const handleRangeChange = (newRange: [number, number]) => {
    setRange(newRange);
    setCurrentTime(newRange[0]);
    playerRef.current?.seekTo(newRange[0], "seconds");
  };

  const handleProgressChange = (newProgress: number) => {
    setCurrentTime(newProgress);
    playerRef.current?.seekTo(newProgress, "seconds");
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
  };

  return (
    <section className={styles.wrapper}>
      <Video
        handleProgress={handleProgress}
        handleDuration={handleDuration}
        seeking={seeking}
        ref={playerRef}
        range={range}
        onProgressChange={handleProgressChange}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        duration={duration}
      />
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
