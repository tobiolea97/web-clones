interface NavBarCategoryItemProps {
  href: string;
  key: number;
  categoryItemId: number;
  children: React.ReactNode;
  onPointerChange?: (isPointerOver: boolean) => void;
  setHoveredCategory: (hoveredCategory: number) => void;
}

const NavBarCategoryItem: React.FC<NavBarCategoryItemProps> = ({
  href,
  categoryItemId,
  children,
  onPointerChange,
  setHoveredCategory
}) => {
  return (
    <li
      className="nav-categs-departments__list nav-categs-departments__list--static"
      onMouseEnter={() => { onPointerChange && onPointerChange(true); setHoveredCategory(categoryItemId) } }
      onMouseLeave={() => { onPointerChange && onPointerChange(false); setHoveredCategory(0) }}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavBarCategoryItem;
