"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./button.module.css";
const BackBtn = () => {
  const router = useRouter();

  return (
    <button className={styles["back-btn"]} onClick={() => router.push("/")}>
      <span className='h-6 w-6 border rounded-[8px] border-[#777] flex items-center justify-center '>
        <ChevronLeft size={18} />
      </span>
      Back
    </button>
  );
};

export default BackBtn;
