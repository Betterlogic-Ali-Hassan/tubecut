import React from "react";
import styles from "./button.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface Props {
  children: React.ReactNode;
  className?: string;
  url?: string;
}
const Button = ({ children, className, url = "#" }: Props) => {
  return (
    <Link href={url} className={cn(styles.btn, className)}>
      {children}
    </Link>
  );
};

export default Button;
