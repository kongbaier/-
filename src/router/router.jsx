import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Settings from "../pages/Settings/Settings";
import Searching from "../components/searching/searching";
import Setting from "../components/Setting/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        path: "/searching",
        element: <Searching />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

export default router;
