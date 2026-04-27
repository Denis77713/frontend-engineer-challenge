import type { base_type_ui } from "@shared/ui/types-base"
import { type FC, type InputHTMLAttributes } from "react"
import type { UseFormRegisterReturn } from "react-hook-form"

import style from "./input-text.module.scss"

export type InputTextProps = {
  type?: InputHTMLAttributes<HTMLInputElement>["type"]
  label: string
  placeholder: string
  isSubmitted: boolean
  register: UseFormRegisterReturn
  errorMessage?: string
  isValid: boolean
  icon?: React.ReactNode
} & base_type_ui

export const InputText: FC<InputTextProps> = ({
  type,
  label,
  placeholder,
  errorMessage,
  isSubmitted,
  register,
  isValid,
  icon,
  styles,
}) => {
  return (
    <>
      <div className={style.inputWrapper}>
        <div className={style.label}>{label}</div>
        <input
          className={`
            ${style.input}
            ${
              isSubmitted && errorMessage
                ? style.border_error
                : isValid
                  ? style.border_confirm
                  : style.border_default
            }${styles && styles} `}
          type={type}
          placeholder={placeholder}
          {...register}
        />
        {icon && <div>{icon}</div>}
      </div>
      {errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
    </>
  )
}
