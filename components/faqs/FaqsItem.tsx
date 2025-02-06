import React from "react";
import styles from "./faqs.module.css";
const FaqsItem = () => {
  return (
    <div className={styles["faq-item"]}>
      <p className={styles.question}>What is tubecut?</p>
      <p className={styles.answer}>
        Tubecut is a Mac App that allows you to download and trim youtube
        videos, with Tubecut, you can download and trim youtube videos in any
        format, ranging from 144p to 4k, in your desired quality and in mp4 or
        mp3.
      </p>
    </div>
  );
};

export default FaqsItem;
