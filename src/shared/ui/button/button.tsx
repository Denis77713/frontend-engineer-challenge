import type { ButtonHTMLAttributes, FC } from "react"

import type { base_type_ui } from "../types-base"
import style from "./button.module.scss"

type ButtonProps = {
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  base_type_ui

export const Button: FC<ButtonProps> = ({ text, styles }) => {
  return (
    <button
      className={`
      ${style.button}
      ${styles && styles}
    `}
    >
      {text}
    </button>
  )
}
