import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  title?: string;
  des?: string;
  className?: string;
}
const Heading = ({ title, des, className }: Props) => {
  return (
    <div className={cn("heading max-[400px]:px-6", className)}>
      {title && (
        <h2 className='max-sm:!text-center'>
          <span className='overlay '>{title}</span>
        </h2>
      )}
      {des && (
        <p className='max-sm:!text-center'>
          <span className='overlay'>{des}</span>
        </p>
      )}
    </div>
  );
};

export default Heading;
