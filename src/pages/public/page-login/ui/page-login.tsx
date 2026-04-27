import { Login } from "@features/login"
import { Description, Title } from "@shared/ui"

export const PageLogin = () => {
  return (
    <>
      <Title title="Задайте пароль" />
      <Description>
        Задайте пароль <a href="#">asdasdasd</a>
      </Description>
      <Login />
    </>
  )
}
