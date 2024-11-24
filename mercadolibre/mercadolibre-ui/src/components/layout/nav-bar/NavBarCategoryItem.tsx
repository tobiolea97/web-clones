interface NavBarCategoryItemProps {
  href: string;
  children: React.ReactNode;
  onPointerChange?: (isPointerOver: boolean) => void; // Prop para el evento
}

const NavBarCategoryItem: React.FC<NavBarCategoryItemProps> = ({
  href,
  children,
  onPointerChange,
}) => {
  return (
    <li
      className="nav-categs-departments__list nav-categs-departments__list--static"
      onMouseEnter={() => onPointerChange && onPointerChange(true)} // Activar en hover
      onMouseLeave={() => onPointerChange && onPointerChange(false)} // Desactivar en salir
    >
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavBarCategoryItem;
