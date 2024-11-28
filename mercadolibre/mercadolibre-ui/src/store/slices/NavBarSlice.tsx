import { createSlice } from "@reduxjs/toolkit";

const NavBarSlice = createSlice({
  name: "counter", // Nombre del slice
  initialState: {
    categoryMenuOpen: false,
    subcategoyMenuOpen: false,
  },
  reducers: {
    toogleCategoryMenu: (state, actions) => {
      state.categoryMenuOpen = actions.payload;
      state.subcategoyMenuOpen = false;
    },
    toogleSubcategoryMenu: (state, actions) => {
      state.subcategoyMenuOpen = actions.payload;
    },
    // TODO: remove the ones below
    showCategoryMenu: (state) => {
      state.categoryMenuOpen = true;
    },
    hideCategoryMenu: (state) => {
      state.categoryMenuOpen = false;
      state.subcategoyMenuOpen = false;
    },
    showSubcategoryMenu: (state) => {
      state.subcategoyMenuOpen = true;
    },
    hideSubcategoryMenu: (state) => {
      state.subcategoyMenuOpen = false;
    },
  },
});

export const {
  toogleCategoryMenu,
  toogleSubcategoryMenu,
  showCategoryMenu,
  hideCategoryMenu,
  showSubcategoryMenu,
  hideSubcategoryMenu,
} = NavBarSlice.actions;

export default NavBarSlice.reducer;

