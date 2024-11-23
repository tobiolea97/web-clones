
interface NavBarMenuItemProps {
  href: string;
  children: React.ReactNode;
}

const NavBarMenuItem: React.FC<NavBarMenuItemProps> = ({ href, children  }) => {
  return (
    <li className="nav-menu-item">
      <a href={href} className="nav-menu-item-link" rel="">
        {children}
      </a>
    </li>
  );
};

export default NavBarMenuItem;

