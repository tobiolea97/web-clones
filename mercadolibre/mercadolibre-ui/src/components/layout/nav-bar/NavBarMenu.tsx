
import NavBarMenuItem from "./NavBarMenuItem";
import { menuItems } from "./NavBarMockedData";

const NavBarMenu = () => {
  

  return (
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
            {/* <div
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
                </div> */}
          </li>
          {menuItems.map((item) => (
            <NavBarMenuItem href={item.url}>
              {item.label}
            </NavBarMenuItem>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBarMenu;

