import { useEffect, useState } from "react";
import NavBarCategoryItem from "./NavBarCategoryItem";
import { categories, subcategories } from "./NavBarMockedData";
import NavBarSubCategoryItem from "./NavBarSubCategoryList";

interface NavBarMenuProps {
  isMenuOpen: boolean;
}

const NavBarCategoryList = ({ isMenuOpen }: NavBarMenuProps) => {

  const [isPointerOver, setIsPointerOver] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsPointerOver(true);
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
      hidden={isMenuOpen || isPointerOver ? "" : "hidden"}
      onMouseEnter={() => setIsPointerOver(true)}
      onMouseLeave={() => setIsPointerOver(false)}
    >
      <ul className="nav-categs-departments" data-js="nav-categs-departments">
        {categories.map((category, index) => (
          <NavBarCategoryItem href={category.url} key={index}>
            {category.label}
          </NavBarCategoryItem>
        ))}
      </ul>
      {subcategories.map((subcategory, index) => (
        <NavBarSubCategoryItem
          group={subcategory.group}
          subcategories={subcategory.subcategories}
          key={index}
        />
      ))}
    </div>
  );
};

export default NavBarCategoryList;
