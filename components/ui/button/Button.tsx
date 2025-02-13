import React from "react";
import styles from "./button.module.css";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const Button = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={cn(styles.btn, className)}>
      {children}
    </button>
  );
};

export default Button;
