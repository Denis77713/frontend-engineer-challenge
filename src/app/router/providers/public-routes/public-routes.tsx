import {
  PageError,
  PageLogin,
  PageRecover,
  PageRegistration,
  PageResetPassword,
} from "@pages/public"

import { ROUTES } from "../config/constants"
import { PublicLayout } from "../config/public-layout"

export const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <PageLogin />,
      },
      {
        path: ROUTES.REGISTER,
        element: <PageRegistration />,
      },
      {
        path: ROUTES.RESET_PASSWORD,
        element: <PageResetPassword />,
      },
      {
        path: ROUTES.RECOVER,
        element: <PageRecover />,
      },
      {
        path: "*",
        element: <PageError />,
      },
    ],
  },
]
