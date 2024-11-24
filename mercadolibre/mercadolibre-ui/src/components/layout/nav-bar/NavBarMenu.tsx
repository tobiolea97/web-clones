import { useState } from "react";
import NavBarCategoryList from "./NavBarCategoryList";
import NavBarMenuItem from "./NavBarMenuItem";
import { menuItems } from "./NavBarMockedData";

const NavBarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav-area nav-bottom-area nav-center-area" onMouseEnter={() => setIsMenuOpen(false)}>
      <div className="nav-menu" onMouseEnter={() => setIsMenuOpen(false)}>
        <ul className="nav-menu-list" onMouseEnter={() => setIsMenuOpen(false)}>
          <li
            className="nav-menu-item"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
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
            <NavBarCategoryList isMenuOpen={isMenuOpen} />
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
