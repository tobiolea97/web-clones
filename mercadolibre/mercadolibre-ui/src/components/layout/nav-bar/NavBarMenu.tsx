import { useState } from "react";
import NavBarCategoryList from "./NavBarCategoryList";
import NavBarMenuItem from "./NavBarMenuItem";
import { menuItems } from "./NavBarMockedData";
import { useSelector, useDispatch } from "react-redux";
import { showCategoryMenu, hideCategoryMenu } from "../../../store/slices/NavBarSlice";

interface NavBarMenuProps {
  isPointerOverMenu: boolean;
  setIsPointerOverMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarMenu: React.FC<NavBarMenuProps> = ({ setIsPointerOverMenu, isPointerOverMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className="nav-area nav-bottom-area nav-center-area"
      onMouseEnter={() => {
        setIsMenuOpen(false);
        setIsPointerOverMenu(false);
      }}
    >
      <div
        className="nav-menu"
        onMouseEnter={() => {
          setIsMenuOpen(false);
          setIsPointerOverMenu(false);
        }}
      >
        <ul className="nav-menu-list">
          <li
            className="nav-menu-item"

            onMouseEnter={() => {
              setIsMenuOpen(true)
              dispatch(showCategoryMenu());
            }}
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
            <NavBarCategoryList
              isMenuOpen={isMenuOpen}
              isPointerOverMenu={isPointerOverMenu}
              setIsPointerOverMenu={setIsPointerOverMenu}
            />
          </li>
          {menuItems.map((item, index) => (
            <NavBarMenuItem
              href={item.url}
              key={index}
              setIsPointerOverMenu={setIsPointerOverMenu}
            >
              {item.label}
            </NavBarMenuItem>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBarMenu;
