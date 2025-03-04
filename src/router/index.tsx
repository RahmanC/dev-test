import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Calendar, Toolbar } from "../pages";
import { AppWrapper } from "../components/layout/appWrapper";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "",
        element: <Calendar />,
      },
      {
        path: "toolbar",
        element: <Toolbar />,
      },
    ],
    errorElement: <div>Something went wrong!!!</div>,
  },
  {
    path: "*",
    element: <div>Page Not Found!</div>,
  },
];

const router = createBrowserRouter(routes);

export { router };
