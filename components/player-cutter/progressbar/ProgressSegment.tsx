import { cn } from "@/lib/utils";

interface ProgressSegmentProps {
  width: number;
  position?: "left" | "right";
  className?: string;
}

export const ProgressSegment: React.FC<ProgressSegmentProps> = ({
  width,
  position,
  className,
}) => (
  <div
    className={cn(
      "h-full absolute z-20 transition-all duration-300 ease-in-out",
      position === "left" ? "left-0" : position === "right" ? "right-0" : "",
      "bg-[#9e9dfb]",
      className
    )}
    style={{ width: `${width}%` }}
  />
);
