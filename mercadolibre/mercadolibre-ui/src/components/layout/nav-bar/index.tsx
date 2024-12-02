import "./styles.css";
import NavBarLogoComponent from "./NavBarLogoComponent";
import NavBarSearch from "./NavBarSearch";
import NavBarPromotionalBanner from "./NavBarPromotionalBanner";
import NavBarSendTo from "./NavBarSendTo";
import NavBarMenu from "./NavBarMenu";
import NavBarUserMenu from "./NavBarUserMenu";

const NavBar = () => {
  return (
    <header className="nav-header nav-header-plus ui-navigation-v2">
      <div className="nav-bounds nav-bounds-with-cart">
        <NavBarLogoComponent />
        <NavBarSearch />
        <NavBarPromotionalBanner />
        <NavBarSendTo />
        <NavBarMenu />
        <NavBarUserMenu />
      </div>
    </header>
  );
};

export default NavBar;
