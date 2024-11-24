import { useEffect, useState } from "react";
import NavBarCategoryItem from "./NavBarCategoryItem";
import { categories, subcategories } from "./NavBarMockedData";
import NavBarSubCategoryList from "./NavBarSubCategoryList";

interface NavBarMenuProps {
  isMenuOpen: boolean;
}

const NavBarCategoryList = ({ isMenuOpen }: NavBarMenuProps) => {
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [isPointerOverSubcategory, setIsPointerOverSubcategory] =
    useState(false);

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
          <NavBarCategoryItem
            href={category.url}
            key={index}
            onPointerChange={
              category.hasSubcategories
                ? setIsPointerOverSubcategory
                : undefined
            }
          >
            {category.label}
          </NavBarCategoryItem>
        ))}
      </ul>
      {subcategories.map((subcategory, index) => (
        <NavBarSubCategoryList
          group={subcategory.group}
          subcategories={subcategory.subcategories}
          key={index}
          isPointerOverSubcategory={isPointerOverSubcategory}
        />
      ))}
    </div>
  );
};

export default NavBarCategoryList;
