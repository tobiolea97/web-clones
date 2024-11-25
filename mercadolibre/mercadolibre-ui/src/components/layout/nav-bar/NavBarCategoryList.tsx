import { useEffect, useState } from "react";
import NavBarCategoryItem from "./NavBarCategoryItem";
import { categories } from "./NavBarMockedData";
import NavBarSubCategoryList from "./NavBarSubCategoryList";

interface NavBarMenuProps {
  isMenuOpen: boolean;
  isPointerOverMenu: boolean;
  setIsPointerOverMenu: (isPointerOverMenu: boolean) => void;
}

const NavBarCategoryList = ({
  isMenuOpen,
  isPointerOverMenu,
  setIsPointerOverMenu,
}: NavBarMenuProps) => {
  const [hoveredCategory, setHoveredCategory] = useState(0);
  const [isPointerOverMenuSubcategory, setIsPointerOverMenuSubcategory] =
    useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsPointerOverMenu(true);
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
      hidden={isMenuOpen || isPointerOverMenu ? "" : "hidden"}
      onMouseEnter={() => setIsPointerOverMenu(true)}
      onMouseLeave={() => setIsPointerOverMenu(false)}
    >
      <ul className="nav-categs-departments" data-js="nav-categs-departments">
        {categories.map((category) => (
          <NavBarCategoryItem
            href={category.url}
            key={category.id}
            categoryItemId={category.id}
            onPointerChange={
              category.hasSubcategories
                ? setIsPointerOverMenuSubcategory
                : undefined
            }
            setHoveredCategory={setHoveredCategory}
          >
            {category.label}
          </NavBarCategoryItem>
        ))}
      </ul>
      <NavBarSubCategoryList
        isPointerOverMenuSubcategory={isPointerOverMenuSubcategory}
        hoveredCategory={hoveredCategory}
      />
    </div>
  );
};

export default NavBarCategoryList;
