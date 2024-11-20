import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root.tsx";
import { Home } from "../pages/home/Home.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        { path: "home", element: <Home />},
      ],
    },
  ]);

export default router;