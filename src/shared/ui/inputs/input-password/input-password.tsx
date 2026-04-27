import Eye from "@shared/assets/icons/eye.svg?react"
import { type FC, useState } from "react"

import { InputText, type InputTextProps } from "../input-text/input-text"
import style from "./input-password.module.scss"

type InputPasswordProps = InputTextProps & {}

export const InputPassword: FC<InputPasswordProps> = ({ styles, ...props }) => {
  const [isPassword, setIsPassword] = useState(true)

  return (
    <InputText
      styles={`
        ${style.input_password}
        ${styles && styles}
      `}
      icon={
        <Eye
          className={style.eye}
          onClick={() => setIsPassword((prev) => !prev)}
        />
      }
      type={isPassword ? "password" : "text"}
      {...props}
    />
  )
}
