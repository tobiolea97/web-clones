import NavBarCategoryItem from "./NavBarCategoryItem";
import { categories, subcategories } from "./NavBarMockedData";
import NavBarSubCategoryItem from "./NavBarSubCategoryList";

const NavBarCategoryList = () => {
  return (
    <div
      className="nav-categs"
      data-js="nav-categs"
      aria-label="Categorías"
      aria-modal="true"
      // tabindex="-1"
      role="dialog"
      hidden=""
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
