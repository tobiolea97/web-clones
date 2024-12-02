import { useEffect, useState } from "react";
import { categories } from "./NavBarMockedData";
import { useSelector } from "react-redux";
import { CustomStoreState } from "../../../store/Store";

interface NavBarSubCategoryProps {
  hoveredCategory: number;
  setIsPointerOverMenuSubcategory?: (
    isPointerOverMenuSubcategory: boolean
  ) => void;
}

const NavBarSubCategoryList: React.FC<NavBarSubCategoryProps> = ({
  hoveredCategory,
}) => {
  const [isPointerOverMenu, setIsPointerOverMenu] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<any>();

  const isPointerOverMenuSubcategory = useSelector(
    (state: CustomStoreState) => state.navBar.subcategoyMenuOpen
  );

  useEffect(() => {
    if (hoveredCategory !== 0) {
      const category = categories.find(
        (category) => category.id === hoveredCategory
      );
      setCurrentCategory(
        category && category.hasSubcategories ? category : undefined
      );
    }
  }, [hoveredCategory]);

  return (
    <div
      className="nav-categs-detail"
      data-js="nav-categs-detail"
      aria-modal="true"
      data-order="0"
      //   tabindex="-1"
      role="dialog"
      aria-label="Tecnología"
      onMouseEnter={() => setIsPointerOverMenu(true)}
      onMouseLeave={() => setIsPointerOverMenu(false)}
      hidden={isPointerOverMenuSubcategory || isPointerOverMenu ? "" : "hidden"}
    >
      {
        <header className="nav-categs-detail__header">
          <div role="heading" aria-level="1">
            {currentCategory && currentCategory.label}
          </div>
        </header>
      }
      <div className="nav-categs-detail__body">
        <div className="nav-categs-detail__body-content">
          {currentCategory &&
            currentCategory.subcategories.map((subcategory, index) => (
              <div
                className="nav-categs-detail__categ"
                data-type="undefined"
                key={index}
              >
                <div
                  className="nav-categs-detail__title"
                  role="heading"
                  aria-level="2"
                >
                  <a href="https://www.mercadolibre.com.ar/c/celulares-y-telefonos#menu=categories">
                    {subcategory.name}
                  </a>
                </div>
                <ul className="nav-categs-detail__categ-list">
                  {subcategory.items.map((item, index) => (
                    <li key={index}>
                      <a href="https://listado.mercadolibre.com.ar/celulares-telefonos/celulares-smartphones/#menu=categories">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NavBarSubCategoryList;
