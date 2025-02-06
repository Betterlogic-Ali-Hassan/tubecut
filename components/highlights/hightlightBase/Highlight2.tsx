import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import styles from "./highlightBase.module.css";
const Highlight2 = () => {
  return (
    <>
      <div className={styles["text-box"]}>
        <h2>
          <span className='overlay'>Slice. Cut. Finish.</span>
        </h2>
        <p>
          <span className='overlay'>
            You can trim and download your videos by choosing the time range
            that you wish to save
          </span>
        </p>
      </div>
      <div className={styles["images-container"]}>
        <div className={styles["highlights-img"]}>
          <Image
            src='/player-bg.avif'
            alt='highlight'
            height={243}
            width={302}
            className='object-contain'
          />
        </div>
        <div className={cn(styles["img-card"])}>
          <Image
            src='/player.avif'
            alt='highlight'
            height={290}
            width={360}
            className='object-contain object-center h-full'
          />
        </div>
      </div>
    </>
  );
};

export default Highlight2;
