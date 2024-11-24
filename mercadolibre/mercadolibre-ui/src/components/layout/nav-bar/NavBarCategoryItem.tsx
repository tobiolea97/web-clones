interface NavBarCategoryItemProps {
  href: string;
  children: React.ReactNode;
  onPointerChange?: (isPointerOver: boolean) => void;
}

const NavBarCategoryItem: React.FC<NavBarCategoryItemProps> = ({
  href,
  children,
  onPointerChange
}) => {
  return (
    <li
      className="nav-categs-departments__list nav-categs-departments__list--static"
      onMouseEnter={() => onPointerChange && onPointerChange(true)}
      onMouseLeave={() => onPointerChange && onPointerChange(false)}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavBarCategoryItem;
