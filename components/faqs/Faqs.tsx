import React from "react";
import styles from "./faqs.module.css";
import Link from "next/link";
import FaqsItem from "./FaqsItem";
const Faqs = () => {
  return (
    <section className={styles.wrapper}>
      <div className='flex items-center'>
        <div className={styles["faqs-container"]}>
          <div className={styles.heading}>
            <h2>
              <span className='overlay'>Frequently asked questions</span>
            </h2>
            <p className='text-2xl tracking-[-0.4px] leading-[1.6em] text-left'>
              <Link href='#' className='link'>
                Contact Us
              </Link>{" "}
              via support if you have any more questions.
            </p>
          </div>
          <div className={styles.faqs}>
            <FaqsItem />
            <FaqsItem />
            <FaqsItem />
            <FaqsItem />
            <FaqsItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
