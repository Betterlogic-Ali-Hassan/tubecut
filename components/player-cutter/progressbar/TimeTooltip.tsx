import { cn } from "@/lib/utils";

interface TimeTooltipProps {
  time: string;
  position: number;
}

export const TimeTooltip: React.FC<TimeTooltipProps> = ({ time, position }) => (
  <div
    className={cn(
      "absolute bottom-[20px] w-fit border-border border bg-background px-3 py-1.5 text-sm rounded-[10px]",
      "text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    )}
    style={{
      left: `${position}px`,
      transform: "translateX(-50%)",
    }}
  >
    {time}
  </div>
);
