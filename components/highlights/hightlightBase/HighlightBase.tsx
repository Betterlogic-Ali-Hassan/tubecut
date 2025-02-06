import Image from "next/image";
import React from "react";
import styles from "./highlightBase.module.css";
import { cn } from "@/lib/utils";
import Highlight2 from "./Highlight2";
const HighlightBase = () => {
  return (
    <div className={styles["highlights-container"]}>
      <div className={styles["image-container"]}>
        <div className={styles["highlight-img"]}>
          <Image
            src='/highlight.avif'
            alt='highlight'
            height={290}
            width={360}
            className='object-cover'
          />
        </div>
        <div
          className={cn("top-[63px] left-[87px]", styles.card, styles.mp4card)}
        >
          <Image src='/mp4card.avif' alt='highlight' height={115} width={109} />
        </div>
        <div
          className={cn("top-[62px] right-[96px]", styles.card, styles.mp3card)}
        >
          <Image src='/mp3card.avif' alt='highlight' height={115} width={109} />
        </div>
      </div>
      <div className={styles["text-box"]}>
        <h2>
          <span className='overlay'>Every. Single. Option.</span>
        </h2>

        <p>
          <span className='overlay'>
            Download youtube videos in every single quality right from 144p to
            4K HD
          </span>
        </p>
      </div>
      <Highlight2 />
    </div>
  );
};

export default HighlightBase;
