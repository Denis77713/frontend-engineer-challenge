import type React from "react"

import type { base_type_ui } from "../types-base"
import style from "./description.module.scss"

type DescriptionProps = {
  children: React.ReactNode
} & base_type_ui

export const Description = ({ children, styles }: DescriptionProps) => {
  return (
    <p
      className={`
      ${style.description}
      ${styles && styles}
    `}
    >
      {children}
    </p>
  )
}
