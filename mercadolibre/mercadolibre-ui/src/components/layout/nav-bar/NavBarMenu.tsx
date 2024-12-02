import NavBarCategoryList from "./NavBarCategoryList";
import NavBarMenuItem from "./NavBarMenuItem";
import { menuItems } from "./NavBarMockedData";
import { useDispatch } from "react-redux";
import { toogleCategoryMenu } from "../../../store/slices/NavBarSlice";

const NavBarMenu = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="nav-area nav-bottom-area nav-center-area"
      onMouseEnter={() => {
        dispatch(toogleCategoryMenu(false));
      }}
    >
      <div
        className="nav-menu"
        onMouseEnter={() => {
          dispatch(toogleCategoryMenu(false));
        }}
      >
        <ul className="nav-menu-list">
          <li
            className="nav-menu-item"
            onMouseEnter={() => {
              dispatch(toogleCategoryMenu(true));
            }}
          >
            <a
              href="https://www.mercadolibre.com.ar/categorias#nav-header"
              className="nav-menu-categories-link"
              data-js="nav-menu-categories-trigger"
              role="button"
              aria-expanded="false"
              rel=""
            >
              Categorías
            </a>
            <NavBarCategoryList />
          </li>
          {menuItems.map((item, index) => (
            <NavBarMenuItem href={item.url} key={index}>
              {item.label}
            </NavBarMenuItem>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBarMenu;
