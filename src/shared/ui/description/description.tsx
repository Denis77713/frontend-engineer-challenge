import type React from "react";
import style from "./description.module.scss";
import type { base_type_ui } from "../types-base";

type DescriptionProps = {
  children: React.ReactNode;
} & base_type_ui;

export const Description = ({ children, styles }: DescriptionProps) => {
  return (
    <p className={`
      ${style.description}
      ${styles && styles}
    `}>
      {children}
    </p>
  )
};
