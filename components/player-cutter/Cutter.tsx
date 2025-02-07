import React from "react";
import Video from "./Video";
import Divider from "../Divider";
import VideoDuration from "./videoDuration/VideoDuration";
import DualSlider from "./Slider";
import Button from "../ui/button/Button";
import styles from "./cutter.module.css";
const Cutter = () => {
  return (
    <section className={styles.wrapper}>
      <Video />
      <Divider className='!w-full my-4' />
      <VideoDuration />
      <DualSlider />
      <Button className=' !mt-6'>Apply</Button>
    </section>
  );
};

export default Cutter;
