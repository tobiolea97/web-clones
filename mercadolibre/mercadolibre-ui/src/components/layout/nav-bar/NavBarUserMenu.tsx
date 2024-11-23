const NavBarUserMenu = () => {
  return (
    <div className="nav-header-plus-menu-wrapper nav-area nav-bottom-area nav-right-area">
      <nav id="nav-header-menu" aria-label="Menú de usuario">
        <ul className="nav-header-menu-list">
          <li className="nav-header-menu-list__item">
            <a
              href="https://www.mercadolibre.com.ar/registration?confirmation_url=https%3A%2F%2Fwww.mercadolibre.com.ar%2F#nav-header"
              data-link-id="registration"
              rel="nofollow"
            >
              Creá tu cuenta
            </a>
            <a
              href="https://www.mercadolibre.com/jms/mla/lgz/login?platform_id=ML&amp;go=https%3A%2F%2Fwww.mercadolibre.com.ar%2F&amp;loginType=explicit#nav-header"
              data-link-id="login"
              rel="nofollow"
            >
              Ingresá
            </a>
            <a
              href="https://myaccount.mercadolibre.com.ar/purchases/list#nav-header"
              data-link-id="purchases"
              rel="nofollow"
            >
              Mis compras
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="https://www.mercadolibre.com.ar/gz/cart/v2"
        title="Carrito"
        className="nav-cart nav-cart-empty"
        id="nav-cart"
      >
        <i className="nav-icon-cart"></i>
        <span className="nav-header-visually-hidden">
          0 productos en tu carrito
        </span>
        <span className="nav-icon-cart-quantity"></span>
      </a>
    </div>
  );
};

export default NavBarUserMenu;
