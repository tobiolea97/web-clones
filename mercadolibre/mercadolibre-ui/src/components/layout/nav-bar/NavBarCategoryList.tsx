import { useEffect, useState } from "react";
import { categories } from "./NavBarMockedData";
import { useSelector, useDispatch } from "react-redux";
import { CustomStoreState } from "../../../store/Store";
import { toogleCategoryMenu } from "../../../store/slices/NavBarSlice";
import NavBarCategoryItem from "./NavBarCategoryItem";
import NavBarSubCategoryList from "./NavBarSubCategoryList";

const NavBarCategoryList = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(
    (state: CustomStoreState) => state.navBar.categoryMenuOpen
  );

  const [hoveredCategory, setHoveredCategory] = useState(0);

  useEffect(() => {
    if (isMenuOpen) {
      dispatch(toogleCategoryMenu(true));
    }
  }, [isMenuOpen]);

  return (
    <div
      className="nav-categs"
      data-js="nav-categs"
      aria-label="Categorías"
      aria-modal="true"
      // tabindex="-1"
      role="dialog"
      hidden={isMenuOpen ? "" : "hidden"}
      onMouseEnter={() => dispatch(toogleCategoryMenu(true))}
      onMouseLeave={() => dispatch(toogleCategoryMenu(false))}
    >
      <ul className="nav-categs-departments" data-js="nav-categs-departments">
        {categories.map((category) => (
          <NavBarCategoryItem
            href={category.url}
            key={category.id}
            categoryItemId={category.id}
            setHoveredCategory={setHoveredCategory}
          >
            {category.label}
          </NavBarCategoryItem>
        ))}
      </ul>
      <NavBarSubCategoryList hoveredCategory={hoveredCategory} />
    </div>
  );
};

export default NavBarCategoryList;
