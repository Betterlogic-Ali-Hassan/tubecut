import React from "react";
import styles from "./overlay.module.css";
import Image from "next/image";
import { cn } from "@/lib/utils";
const Overlay = ({ className }: { className?: string }) => {
  return (
    <div className={cn(styles["overlay-wrapper"], className)}>
      <Image
        src='/overlay.avif'
        alt='overlay'
        height={617}
        width={917}
        className='object-contain object-center'
      />
    </div>
  );
};

export default Overlay;
