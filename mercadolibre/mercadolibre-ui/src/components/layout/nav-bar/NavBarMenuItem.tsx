import { toogleCategoryMenu } from "../../../store/slices/NavBarSlice";
import { useDispatch } from "react-redux";

interface NavBarMenuItemProps {
  href: string;
  children: React.ReactNode;
}

const NavBarMenuItem: React.FC<NavBarMenuItemProps> = ({ href, children }) => {
  const dispatch = useDispatch();
  return (
    <li
      className="nav-menu-item"
      onMouseEnter={() => dispatch(toogleCategoryMenu(false))}
    >
      <a href={href} className="nav-menu-item-link" rel="">
        {children}
      </a>
    </li>
  );
};

export default NavBarMenuItem;
