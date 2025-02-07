import { cn } from "@/lib/utils";
import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-[294px] h-[2px] bg-[#16181C]", className)}></div>
  );
};

export default Divider;
