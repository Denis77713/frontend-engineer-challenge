import { createBrowserRouter } from "react-router";
import { PrivateOutlet } from "./providers/private-routes/private-outlet";
import { privateRoutes } from "./providers/private-routes/private-routes";
import { PublicOutlet } from "./providers/public-routes/public-outlet";
import { publicRoutes } from "./providers/public-routes/public-routes";



export const router = createBrowserRouter([
  {
    element: <PrivateOutlet />,
    children: privateRoutes,
  },
  {
    element: <PublicOutlet />,
    children: publicRoutes,
  },
]);
