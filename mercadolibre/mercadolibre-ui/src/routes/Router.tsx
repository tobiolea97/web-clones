import { createBrowserRouter } from "react-router-dom";
import Root from "./Root.tsx";
import Landing from "../views/landing/index.tsx";
import Login from "../views/login/index.tsx";
import Cart from "../views/cart/index.tsx";
import Search from "../views/search/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Landing /> },
      { path: "home", element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
      { path: "search", element: <Search /> },
    ],
  },
]);

export default router;
