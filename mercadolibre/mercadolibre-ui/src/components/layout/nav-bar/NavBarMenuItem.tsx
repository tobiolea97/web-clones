interface NavBarMenuItemProps {
  href: string;
  children: React.ReactNode;
  setIsPointerOverMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarMenuItem: React.FC<NavBarMenuItemProps> = ({
  href,
  children,
  setIsPointerOverMenu,
}) => {
  return (
    <li
      className="nav-menu-item"
      onMouseEnter={() => setIsPointerOverMenu(false)}
    >
      <a href={href} className="nav-menu-item-link" rel="">
        {children}
      </a>
    </li>
  );
};

export default NavBarMenuItem;
