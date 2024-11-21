// import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="nav-header nav-header-plus ui-navigation-v2">
      <div className="nav-bounds nav-bounds-with-cart">
        <div className="nav-header-plus-logo nav-area nav-top-area nav-left-area">
          <a className="nav-logo" href="//www.mercadolibre.com.ar">
            Mercado Libre Argentina - Donde comprar y vender de todo
          </a>
        </div>
        <div className="nav-area nav-top-area nav-center-area">
          <form
            className="nav-search"
            action="https://www.mercadolibre.com.ar/jm/search"
            method="GET"
            role="search"
          >
            <label className="nav-header-visually-hidden">
              Ingresá lo que quieras encontrar
            </label>
            <input
              type="text"
              className="nav-search-input"
              id="cb1-edit"
              name="as_word"
              placeholder="Buscar productos, marcas y más…"
              value=""
              aria-activedescendant=""
              aria-controls="sb-suggestions-1"
              aria-autocomplete="list"
              aria-expanded="false"
              role="combobox"
            />
            <button type="submit" className="nav-search-btn">
              <div
                role="img"
                aria-label="Buscar"
                className="nav-icon-search"
              ></div>
            </button>
            <div
              role="listbox"
              className="sb-suggestions"
              id="sb-suggestions-1"
              aria-hidden="true"
            >
              <ul
                role="group"
                className="sb-suggestions__list"
                id="cb1-list"
              ></ul>
              <div
                role="group"
                className="sb-suggestions__wrapper--additional"
                aria-label="tiendas oficiales"
              >
                <ul
                  role="presentation"
                  className="sb-suggestions__list--additional"
                ></ul>
              </div>
            </div>
          </form>
        </div>
        <div className="nav-area nav-top-area nav-right-area">
          <a
            href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&amp;me.audience=all&amp;me.bu=9&amp;me.bu_line=36&amp;me.component_id=banner_menu_web_ml&amp;me.content_id=ECOSYSTEM_LOYALTY_N6_BNR_MENU_5999&amp;me.flow=146&amp;me.logic=campaigns&amp;me.position=0"
            className="exhibitor__picture"
          >
            <img
              src="public/images/header/promotion.jpg"
              alt="¡Suscribite al nivel 6! Por solo 2.999 pesos los dos primeros meses"
            />
          </a>
        </div>
        
      </div>
    </header>
  );
};
