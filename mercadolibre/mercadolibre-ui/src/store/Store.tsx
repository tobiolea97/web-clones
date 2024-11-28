import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./slices/NavBarSlice";

const store = configureStore({
  reducer: {
    navBar: navBarReducer,
  },
});

export default store;