import NavBarCategoryList from "./NavBarCategoryList";
import NavBarMenuItem from "./NavBarMenuItem";
import { menuItems } from "./NavBarMockedData";

const NavBarMenu = () => {
  return (
    <div className="nav-area nav-bottom-area nav-center-area">
      <div className="nav-menu">
        <ul className="nav-menu-list">
          <li className="nav-menu-item">
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
            <NavBarMenuItem href={item.url} key={index}>{item.label}</NavBarMenuItem>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBarMenu;
