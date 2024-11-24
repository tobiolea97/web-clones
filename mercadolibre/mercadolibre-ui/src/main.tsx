import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./data/Store.tsx";
import router from "./routes/Router.tsx";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <Provider store={store}>
    <RouterProvider router={router} />
  // </Provider>
);
