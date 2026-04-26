import type { base_type_ui } from "../types-base";
import style from "./url.module.scss";


type UrlProps = {
  href: string;
  text: string;
} & base_type_ui;


export const Url: React.FC<UrlProps> = ({ href, text, styles }) => {
  return (
    <a className={`
      ${style.url}
      ${styles && styles}
    `} href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
};
