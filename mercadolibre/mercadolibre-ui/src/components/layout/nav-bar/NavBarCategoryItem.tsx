import { useDispatch } from "react-redux";
import { toogleSubcategoryMenu } from "../../../store/slices/NavBarSlice";

interface NavBarCategoryItemProps {
  href: string;
  key: number;
  categoryItemId: number;
  children: React.ReactNode;
  setHoveredCategory: (hoveredCategory: number) => void;
}

const NavBarCategoryItem: React.FC<NavBarCategoryItemProps> = ({
  href,
  categoryItemId,
  children,
  setHoveredCategory,
}) => {
  const dispatch = useDispatch();

  return (
    <li
      className="nav-categs-departments__list nav-categs-departments__list--static"
      onMouseEnter={() => {
        dispatch(toogleSubcategoryMenu(true));
        setHoveredCategory(categoryItemId);
      }}
      onMouseLeave={() => {
        dispatch(toogleSubcategoryMenu(false));
        setHoveredCategory(0);
      }}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavBarCategoryItem;
