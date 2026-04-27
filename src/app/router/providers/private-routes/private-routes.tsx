import { PageDashboard } from "@pages/private"
import { Navigate } from "react-router"

import { ROUTES } from "../config/constants"
import { PrivateLayout } from "../config/private-layout"

export const privateRoutes = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={ROUTES.DASHBOARD} replace />,
      },
      {
        path: ROUTES.DASHBOARD,
        element: <PageDashboard />,
      },
    ],
  },
]
