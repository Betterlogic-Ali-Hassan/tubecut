import React from "react";
import styles from "./hero.module.css";
import { cn } from "@/lib/utils";
import Button from "../ui/button/Button";
const Hero = () => {
  return (
    <section className={cn("mt-[60px] px-6 ", styles.hero)}>
      <div className='flex items-center gap-1 flex-col max-w-[634px]'>
        <h1 className='!font-medium text-[32px] !text-center'>
          Take Youtube Offline
        </h1>
        <p className='text-center text-xl leading-[32px] w-full'>
          Tubecut lets you easily download and trim <br />
          YouTube videos for free high quality.
        </p>
      </div>
      <input
        type='text'
        name='text'
        id='text'
        placeholder='https://www.youtube.com/watch?v=DKpzCm_nxTo'
        className={styles.input}
      />
      <Button url='/player'>Download</Button>
    </section>
  );
};

export default Hero;
