import { useDispatch } from "react-redux";
import { toogleCategoryMenu } from "../../../store/slices/NavBarSlice";

const NavBarLogoComponent = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="nav-header-plus-logo nav-area nav-top-area nav-left-area"
      onMouseEnter={() => {
        dispatch(toogleCategoryMenu(false));
      }}
    >
      <a className="nav-logo" href="//www.mercadolibre.com.ar">
        Mercado Libre Argentina - Donde comprar y vender de todo
      </a>
    </div>
  );
};

export default NavBarLogoComponent;
