import { createSlice } from "@reduxjs/toolkit";

const NavBarSlice = createSlice({
  name: "counter", // Nombre del slice
  initialState: {
    categoryMenuOpen: false,
    subcategoyMenuOpen: false,
  },
  reducers: {
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
  showCategoryMenu,
  hideCategoryMenu,
  showSubcategoryMenu,
  hideSubcategoryMenu,
} = NavBarSlice.actions;

export default NavBarSlice.reducer;

