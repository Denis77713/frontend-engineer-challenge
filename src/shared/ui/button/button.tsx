import type { ButtonHTMLAttributes, FC } from "react";
import style from "./button.module.scss";
import type { base_type_ui } from "../types-base";

type ButtonProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & base_type_ui;


export const Button: FC<ButtonProps> = ({ text, styles }) => {
  return (
    <button className={`
      ${style.button}
      ${styles && styles}
    `}>
      {text}
    </button>
  )
};
