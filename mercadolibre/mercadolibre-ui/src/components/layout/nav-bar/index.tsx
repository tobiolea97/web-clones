import "./styles.css";
import NavBarLogoComponent from "./NavBarLogoComponent";
import NavBarSearch from "./NavBarSearch";
import NavBarPromotionalBanner from "./NavBarPromotionalBanner";
import NavBarSendTo from "./NavBarSendTo";
import NavBarMenu from "./NavBarMenu";
import NavBarUserMenu from "./NavBarUserMenu";
import { useState } from "react";

const NavBar = () => {
  const [isPointerOverMenu, setIsPointerOverMenu] = useState(false);
  return (
    <header className="nav-header nav-header-plus ui-navigation-v2">
      <div className="nav-bounds nav-bounds-with-cart">
        <NavBarLogoComponent />
        <NavBarSearch setIsPointerOverMenu={setIsPointerOverMenu} />
        <NavBarPromotionalBanner />
        <NavBarSendTo setIsPointerOverMenu={setIsPointerOverMenu}/>
        <NavBarMenu
          isPointerOverMenu={isPointerOverMenu}
          setIsPointerOverMenu={setIsPointerOverMenu}
        />
        <NavBarUserMenu />
      </div>
    </header>
  );
};

export default NavBar;
