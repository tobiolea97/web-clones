// import { Link } from "react-router-dom";

// import "../../../styles/global.css";

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
        <div className="nav-header-plus-cp-wrapper nav-area nav-bottom-area nav-left-area">
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
        <div className="nav-area nav-bottom-area nav-center-area">
          <div className="nav-menu">
            <ul className="nav-menu-list">
              <li className="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.ar/categorias#nav-header"
                  className="nav-menu-categories-link"
                  data-js="nav-menu-categories-trigger"
                  role="button"
                  aria-expanded="false"
                  rel=""
                >
                  Categorías
                </a>
                <div
                  className="nav-categs"
                  data-js="nav-categs"
                  aria-label="Categorías"
                  aria-modal="true"
                  tabindex="-1"
                  role="dialog"
                  hidden=""
                >
                  <ul
                    className="nav-categs-departments"
                    data-js="nav-categs-departments"
                  >
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/vehiculos/#menu=categories">
                        Vehículos
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/inmuebles/#menu=categories">
                        Inmuebles
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/ofertas/supermercado#menu=categories">
                        Supermercado
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--dynamic">
                      <a
                        href="#/"
                        data-order="0"
                        role="button"
                        aria-expanded="false"
                      >
                        Tecnología
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/hogar-muebles-y-jardin#menu=categories">
                        Hogar y Muebles
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/electrodomesticos-y-aires-ac#menu=categories">
                        Electrodomésticos
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/herramientas#menu=categories">
                        Herramientas
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/construccion#menu=categories">
                        Construcción
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/deportes-y-fitness#menu=categories">
                        Deportes y Fitness
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/accesorios-para-vehiculos#menu=categories">
                        Accesorios para Vehículos
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/ropa-y-accesorios#menu=categories">
                        Moda
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/juegos-y-juguetes#menu=categories">
                        Juegos y Juguetes
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/bebes#menu=categories">
                        Bebés
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/belleza-y-cuidado-personal#menu=categories">
                        Belleza y Cuidado Personal
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/salud-y-equipamiento-medico#menu=categories">
                        Salud y Equipamiento Médico
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/industrias-y-oficinas#menu=categories">
                        Industrias y Oficinas
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/agro#menu=categories">
                        Agro
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/productos-sustentables#menu=categories">
                        Productos Sustentables
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/c/servicios#menu=categories">
                        Servicios
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/mas-vendidos#menu=categories">
                        Más vendidos
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/tiendas-oficiales#menu=categories">
                        Tiendas oficiales
                      </a>
                    </li>
                    <li className="nav-categs-departments__list nav-categs-departments__list--static">
                      <a href="https://www.mercadolibre.com.ar/categorias#menu=categories">
                        Ver más categorías
                      </a>
                    </li>
                  </ul>
                  <div
                    className="nav-categs-detail"
                    data-js="nav-categs-detail"
                    aria-modal="true"
                    data-order="0"
                    tabindex="-1"
                    role="dialog"
                    aria-label="Tecnología"
                    hidden=""
                  >
                    <header className="nav-categs-detail__header">
                      <div role="heading" aria-level="1">
                        Tecnología
                      </div>
                    </header>
                    <div className="nav-categs-detail__body">
                      <div className="nav-categs-detail__body-content">
                        <div
                          className="nav-categs-detail__categ"
                          data-type="undefined"
                        >
                          <div
                            className="nav-categs-detail__title"
                            role="heading"
                            aria-level="2"
                          >
                            <a href="https://www.mercadolibre.com.ar/c/celulares-y-telefonos#menu=categories">
                              Celulares y Teléfonos
                            </a>
                          </div>
                          <ul className="nav-categs-detail__categ-list">
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/celulares-telefonos/celulares-smartphones/#menu=categories">
                                Celulares y Smartphones
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/celulares-telefonos/accesorios-celulares/#menu=categories">
                                Accesorios para Celulares
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/celulares-telefonos/repuestos-celulares/#menu=categories">
                                Repuestos de Celulares
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="nav-categs-detail__categ"
                          data-type="undefined"
                        >
                          <div
                            className="nav-categs-detail__title"
                            role="heading"
                            aria-level="2"
                          >
                            <a href="https://www.mercadolibre.com.ar/c/computacion#menu=categories">
                              Computación
                            </a>
                          </div>
                          <ul className="nav-categs-detail__categ-list">
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/computacion/componentes-pc/#menu=categories">
                                Componentes de PC
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/computacion/impresion/#menu=categories">
                                Impresión
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/computacion/tablets-accesorios/tablets/#menu=categories">
                                Tablets y Accesorios
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/computacion/pc-escritorio/pc/#menu=categories">
                                PC
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/computacion/conectividad-redes/#menu=categories">
                                Conectividad y Redes
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/computacion/monitores-accesorios/#menu=categories">
                                Monitores y Accesorios
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="nav-categs-detail__categ"
                          data-type="undefined"
                        >
                          <div
                            className="nav-categs-detail__title"
                            role="heading"
                            aria-level="2"
                          >
                            <a href="https://www.mercadolibre.com.ar/c/camaras-y-accesorios#menu=categories">
                              Cámaras y Accesorios
                            </a>
                          </div>
                          <ul className="nav-categs-detail__categ-list">
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/camaras-accesorios/camaras/camaras-digitales/#menu=categories">
                                Cámaras Digitales
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/camaras-accesorios/accesorios-camaras/#menu=categories">
                                Accesorios para Cámaras
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/camaras-accesorios/filmadoras-camaras-accion/#menu=categories">
                                Filmadoras y Cámaras de Acción
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="nav-categs-detail__categ"
                          data-type="undefined"
                        >
                          <div
                            className="nav-categs-detail__title"
                            role="heading"
                            aria-level="2"
                          >
                            <a href="https://www.mercadolibre.com.ar/c/electronica-audio-y-video#menu=categories">
                              Electrónica, Audio y Video
                            </a>
                          </div>
                          <ul className="nav-categs-detail__categ-list">
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/electronica-audio-video/audio/#menu=categories">
                                Audio
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/electronica-audio-video/accesorios-audio-video/#menu=categories">
                                Accesorios para Audio y Video
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/electronica-audio-video/componentes-electronicos/#menu=categories">
                                Componentes Electrónicos
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/electronica-audio-video/drones-accesorios/#menu=categories">
                                Drones y Accesorios
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/accesorios-vehiculos/audio-vehiculos/#menu=categories">
                                Audio para Vehículos
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/electronica-audio-video/televisores/#menu=categories">
                                Televisores
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="nav-categs-detail__categ"
                          data-type="undefined"
                        >
                          <div
                            className="nav-categs-detail__title"
                            role="heading"
                            aria-level="2"
                          >
                            <a href="https://www.mercadolibre.com.ar/c/consolas-y-videojuegos#menu=categories">
                              Consolas y Videojuegos
                            </a>
                          </div>
                          <ul className="nav-categs-detail__categ-list">
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/consolas-videojuegos/videojuegos/#menu=categories">
                                Videojuegos
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/consolas-videojuegos/accesorios-consolas/playstation/#menu=categories">
                                Para PlayStation
                              </a>
                            </li>
                            <li>
                              <a href="https://listado.mercadolibre.com.ar/consolas-videojuegos/accesorios-consolas/nintendo/#menu=categories">
                                Para Nintendo
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="nav-categs-detail__categ"
                          data-type="undefined"
                        >
                          <div
                            className="nav-categs-detail__title"
                            role="heading"
                            aria-level="2"
                          >
                            <a href="https://listado.mercadolibre.com.ar/electronica-audio-video/televisores/#menu=categories">
                              Televisores
                            </a>
                          </div>
                          <ul className="nav-categs-detail__categ-list"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.ar/ofertas#nav-header"
                  className="nav-menu-item-link"
                  rel=""
                >
                  Ofertas
                </a>
              </li>
              <li className="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.ar/cupones?source_page=mperfil#nav-header"
                  className="nav-menu-item-link"
                  rel="nofollow"
                >
                  Cupones
                </a>
              </li>
              <li className="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.ar/ofertas/supermercadolibre#nav-header"
                  className="nav-menu-item-link"
                  rel=""
                >
                  Supermercado
                </a>
              </li>
              <li className="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.ar/c/ropa-y-accesorios#nav-header"
                  className="nav-menu-item-link"
                  rel=""
                >
                  Moda
                </a>
              </li>
              <li className="nav-menu-item">
                <a
                  href="https://play.mercadolibre.com.ar/?origin=navigation_menu_web#nav-header"
                  className="nav-menu-item-link"
                  rel=""
                >
                  Mercado Play
                  <span className="nav-link-tag nav-link-tag--small mplay">
                    Gratis
                  </span>
                </a>
              </li>
              <li className="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.ar/syi/core/list#nav-header"
                  className="nav-menu-item-link"
                  rel=""
                >
                  Vender
                </a>
              </li>
              <li className="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.ar/ayuda#nav-header"
                  className="nav-menu-item-link"
                  rel=""
                >
                  Ayuda
                </a>
              </li>
            </ul>
          </div>
        </div>
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
      </div>
    </header>
  );
};
