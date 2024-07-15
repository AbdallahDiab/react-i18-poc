import { Navigate, useRoutes } from "react-router-dom";
import Home from "./src/Pages/Home";
import Page1 from "./src/Pages/page1";
import Page2 from "./src/Pages/Page2";

const AppRoutes: React.FC = () => {
  const routing = useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/page1",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },

    {
      path: "/",
      element: <Navigate to="/home" />,
    },
  ]);
  return routing;
};

export default AppRoutes;
