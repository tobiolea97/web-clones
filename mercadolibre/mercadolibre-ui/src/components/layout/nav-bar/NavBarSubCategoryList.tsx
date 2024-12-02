import { useEffect, useState } from "react";
import { categories } from "./NavBarMockedData";
import { useSelector } from "react-redux";
import { CustomStoreState } from "../../../store/Store";

import { useDispatch } from "react-redux";
import { toogleCategoryMenu } from "../../../store/slices/NavBarSlice";

interface NavBarSubCategoryProps {
  hoveredCategory: number;
  setIsPointerOverMenuSubcategory?: (
    isPointerOverMenuSubcategory: boolean
  ) => void;
}

const NavBarSubCategoryList: React.FC<NavBarSubCategoryProps> = ({
  hoveredCategory,
}) => {
  const [currentCategory, setCurrentCategory] = useState<any>();
  const dispatch = useDispatch();

  const isPointerOverMenuSubcategory = useSelector(
    (state: CustomStoreState) => state.navBar.subcategoyMenuOpen
  );

  useEffect(() => {
    if (hoveredCategory !== 0) {
      console.log("searching for category: ", hoveredCategory);
      const category = categories.find(
        (category) => category.id === hoveredCategory
      );
      console.log("category found: ", category);
      setCurrentCategory(category);
      console.log("currentCategory is now: ", currentCategory);
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
      onMouseEnter={() => dispatch(toogleCategoryMenu(true))}
      onMouseLeave={() => dispatch(toogleCategoryMenu(false))}
      hidden={
        currentCategory && currentCategory.hasSubcategories ? "" : "hidden"
      }
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
            currentCategory.hasSubcategories &&
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
