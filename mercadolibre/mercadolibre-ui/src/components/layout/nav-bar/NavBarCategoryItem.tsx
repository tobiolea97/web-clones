interface NavBarCategoryItemProps {
    href: string;
    children: React.ReactNode;
  }

const NavBarCategoryItem: React.FC<NavBarCategoryItemProps> = ({ href, children  })=> {
  return (
    <li className="nav-categs-departments__list nav-categs-departments__list--static">
      <a href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavBarCategoryItem;
