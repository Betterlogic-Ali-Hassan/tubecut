"use client";
import React, { useState } from "react";
import styles from "./option.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Loader2 } from "lucide-react";
interface Props {
  label: string;
  size: string;
  resolution?: string;
}
const Option = ({ label, size, resolution }: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles["options-wrapper"]}>
      <div className={styles["option-card"]}>
        <p className={styles.label}>
          {label} <span className={styles.resolution}>{resolution}</span>
        </p>
        <p className={styles.size}>{size}</p>
      </div>
      <Link
        onClick={() => setLoading(true)}
        href='/player'
        className={cn(styles["option-card-button"], styles["icon-btn"])}
      >
        {loading ? (
          <Loader2 size={24} className='animate-spin ' />
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='22px'
            viewBox='0 -960 960 960'
            width='22px'
            fill='#FFFFFF'
          >
            <path d='M760-120 480-400l-94 94q8 15 11 32t3 34q0 66-47 113T240-80q-66 0-113-47T80-240q0-66 47-113t113-47q17 0 34 3t32 11l94-94-94-94q-15 8-32 11t-34 3q-66 0-113-47T80-720q0-66 47-113t113-47q66 0 113 47t47 113q0 17-3 34t-11 32l494 494v40H760ZM600-520l-80-80 240-240h120v40L600-520ZM240-640q33 0 56.5-23.5T320-720q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720q0 33 23.5 56.5T240-640Zm240 180q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM240-160q33 0 56.5-23.5T320-240q0-33-23.5-56.5T240-320q-33 0-56.5 23.5T160-240q0 33 23.5 56.5T240-160Z' />
          </svg>
        )}
      </Link>
      <button className={styles["option-card-button"]}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          fill='#FFFFFF'
        >
          <path d='M439-82q-76-8-141.5-42.5t-113.5-88Q136-266 108.5-335T81-481q0-155 102.5-268.5T440-880v80q-121 17-200 107.5T161-481q0 121 79 211.5T439-162v80Zm40-198L278-482l57-57 104 104v-245h80v245l103-103 57 58-200 200Zm40 198v-80q43-6 82.5-23t73.5-43l58 58q-47 37-101 59.5T519-82Zm158-652q-35-26-74.5-43T520-800v-80q59 6 113 28.5T733-792l-56 58Zm112 506-56-57q26-34 42-73.5t22-82.5h82q-8 59-30 113.5T789-228Zm8-293q-6-43-22-82.5T733-677l56-57q38 45 61 99.5T879-521h-82Z' />
        </svg>
        Download
      </button>
    </div>
  );
};

export default Option;
