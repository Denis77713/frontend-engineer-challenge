import type { base_type_ui } from "../types-base"
import style from "./title.module.scss"

type TitleProps = {
  title: string
} & base_type_ui

export const Title = ({ title, styles }: TitleProps) => {
  return <h1 className={`${style.title} ${styles && styles}`}>{title}</h1>
}
