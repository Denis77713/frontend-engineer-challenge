import { HeaderPrivate } from "@widgets/header-private"
import { Outlet } from "react-router"

export const PrivateLayout = () => {
  return (
    <div className="app">
      <HeaderPrivate />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
