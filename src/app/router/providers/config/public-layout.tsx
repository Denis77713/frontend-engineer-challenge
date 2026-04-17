
import { HeaderPublic } from "@widgets/header-public";
import { Outlet } from "react-router";

export const PublicLayout = () => {
  return (
    <div className="app">
      <HeaderPublic />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
