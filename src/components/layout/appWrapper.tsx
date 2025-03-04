import { Outlet, useLocation } from "react-router-dom";
import { layoutContent } from "../../config/layoutContent";
import { AppLayout } from "./appLayout";

export const AppWrapper = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "calendar";
  const content =
    layoutContent[path as keyof typeof layoutContent] || layoutContent.calendar;

  return (
    <AppLayout leftContent={content}>
      <Outlet />
    </AppLayout>
  );
};
