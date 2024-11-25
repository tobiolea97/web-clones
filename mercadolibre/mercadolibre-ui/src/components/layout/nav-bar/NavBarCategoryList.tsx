import { useEffect, useState } from "react";
import NavBarCategoryItem from "./NavBarCategoryItem";
import { categories } from "./NavBarMockedData";
import NavBarSubCategoryList from "./NavBarSubCategoryList";

interface NavBarMenuProps {
  isMenuOpen: boolean;
  isPointerOver: boolean;
  setIsPointerOver: (isPointerOver: boolean) => void;
}

const NavBarCategoryList = ({ isMenuOpen, isPointerOver, setIsPointerOver }: NavBarMenuProps) => {
  const [hoveredCategory, setHoveredCategory] = useState(0);
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
        {categories.map((category) => (
          <NavBarCategoryItem
            href={category.url}
            key={category.id}
            categoryItemId={category.id}
            onPointerChange={
              category.hasSubcategories
                ? setIsPointerOverSubcategory
                : undefined
            }
            setHoveredCategory={setHoveredCategory}
          >
            {category.label}
          </NavBarCategoryItem>
        ))}
      </ul>
      <NavBarSubCategoryList
        isPointerOverSubcategory={isPointerOverSubcategory}
        hoveredCategory={hoveredCategory}
      />
    </div>
  );
};

export default NavBarCategoryList;
