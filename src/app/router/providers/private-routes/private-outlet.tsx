import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

import { ROUTES } from "../config/constants";

export const PrivateOutlet = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(ROUTES.LOGIN);
    }
  }, [navigate]);

  return <Outlet />;
};
