import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  title?: string;
  des?: string;
  className?: string;
}
const Heading = ({ title, des, className }: Props) => {
  return (
    <div className={cn("heading", className)}>
      {title && (
        <h2>
          <span className='overlay'>{title}</span>
        </h2>
      )}
      {des && (
        <p>
          <span className='overlay'>{des}</span>
        </p>
      )}
    </div>
  );
};

export default Heading;
