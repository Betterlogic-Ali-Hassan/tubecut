import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import styles from "./highlightCards.module.css";
const HighlightCard = ({ side }: { side?: string }) => {
  return (
    <>
      {side === "left" ? (
        <>
          {" "}
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
      ) : (
        <>
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
              className={cn(
                "top-[63px] left-[87px]",
                styles.card,
                styles.mp4card
              )}
            >
              <Image
                src='/mp4card.avif'
                alt='highlight'
                height={115}
                width={109}
              />
            </div>
            <div
              className={cn(
                "top-[62px] right-[96px]",
                styles.card,
                styles.mp3card
              )}
            >
              <Image
                src='/mp3card.avif'
                alt='highlight'
                height={115}
                width={109}
              />
            </div>
          </div>
          <div className={styles["text-box"]}>
            <h2>
              <span className='overlay'>Every. Single. Option.</span>
            </h2>

            <p>
              <span className='overlay'>
                Download youtube videos in every single quality right from 144p
                to 4K HD
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default HighlightCard;
