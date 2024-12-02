import { useDispatch } from "react-redux";
import { toogleCategoryMenu } from "../../../store/slices/NavBarSlice";

const NavBarSendTo = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="nav-header-plus-cp-wrapper nav-area nav-bottom-area nav-left-area"
      onMouseEnter={() => {
        dispatch(toogleCategoryMenu(false));
      }}
    >
      <a
        className="nav-header-cp-anchor"
        data-js="cp"
        href="https://www.mercadolibre.com.ar/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F"
        data-modal-action="true"
        role="button"
      >
        <span className="nav-menu-cp-send">Enviar a</span>
        <span className="nav-menu-link-cp"> Capital Federal</span>
      </a>
      <div className="nav-menu-item">
        <a
          className="nav-menu-cp nav-menu-cp-logged"
          data-js="cp"
          href="https://www.mercadolibre.com.ar/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F"
          data-modal-action="true"
          role="button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="nav-menu-cp-send">Enviar a</span>
          <span className="nav-menu-link-cp"> Capital Federal</span>
        </a>
      </div>
    </div>
  );
};

export default NavBarSendTo;
