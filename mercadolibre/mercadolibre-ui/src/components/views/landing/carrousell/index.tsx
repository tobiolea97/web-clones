import { useEffect } from "react";
import "./styles.css";

const Carrousell = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".andes-carousel-snapped__wrapper");
    const slides = document.querySelectorAll(".andes-carousel-snapped__slide");
    let currentIndex = 1;

    function adjustCarousel() {
      const slideWidth = window.innerWidth; // Recalcular el ancho del slide
      wrapper.style.transition = "none"; // Evitar animaciones durante el ajuste
      wrapper.style.transform = `translate3d(${
        -currentIndex * slideWidth
      }px, 0, 0)`; // Reposicionar el carrusel
    }

    function adjustImageWidth() {
      const images = document.querySelectorAll(
        ".andes-carousel-snapped__slide img"
      );
      const slideWidth = window.innerWidth; // Ancho del viewport

      images.forEach((img) => {
        img.style.width = `${slideWidth}px`; // Ajustar ancho dinámicamente
        img.style.height = "auto"; // Mantener proporción de la imagen
      });

      // Reposicionar el carrusel después de ajustar las imágenes
      adjustCarousel();
    }

    // Ajustar las imágenes y el carrusel al cargar la página
    adjustImageWidth();

    function moveCarousel() {
      currentIndex += 1;
      wrapper.style.transition = "transform 500ms ease-in-out";
      wrapper.style.transform = `translate3d(${
        -currentIndex * window.innerWidth
      }px, 0, 0)`;

      wrapper.addEventListener("transitionend", resetPosition);
    }

    function resetPosition() {
      if (currentIndex === slides.length - 1) {
        currentIndex = 1; // Volver al primer slide real
        wrapper.style.transition = "none";
        wrapper.style.transform = `translate3d(${
          -currentIndex * window.innerWidth
        }px, 0, 0)`;
      }
      wrapper.removeEventListener("transitionend", resetPosition);
    }

    // Ajustar las imágenes y la posición al redimensionar
    window.addEventListener("resize", adjustImageWidth);

    // Configurar el movimiento automático del carrusel
    const intervalId = setInterval(moveCarousel, 3000);

    // Asegurarse de que el ajuste inicial ocurre después de cargar todo el contenido
    window.addEventListener("load", adjustImageWidth);

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
      window.removeEventListener("resize", adjustImageWidth); // Eliminar el listener de resize
      window.removeEventListener("load", adjustImageWidth); // Eliminar el listener de load
    };
  }, []);

  return (
    <main>
      <div className="home">
        <div className="andes-carousel-snapped__exhibitor-wrapper andes-carousel-snapped__hero--desktop">
          <section className="andes-carousel-snapped__container andes-carousel-snapped__container--full andes-carousel-snapped__container--with-controls andes-carousel-snapped__container--strict-boundaries image-container ">
            <div className="andes-carousel-snapped__controls-wrapper">
              {/* <button
            className="andes-carousel-snapped__control andes-carousel-snapped__control--previous andes-carousel-snapped__control--size-large"
            name="andes-carousel-snapped_control"
            data-andes-carousel-snapped-control="previous"
            data-andes-state=""
            type="button"
            aria-label="Anterior"
          >
            <span>
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.9)"
              >
                <path
                  d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z"
                  fill="rgba(0, 0, 0, 0.9)"
                ></path>
              </svg>
            </span>
          </button> */}
              <div className="andes-carousel-snapped andes-carousel-snapped--scroll-hidden">
                <div className="andes-carousel-snapped__wrapper">
                  <div
                    role="group"
                    className="andes-carousel-snapped__slide"
                    aria-label="6 de 6"
                    // style="width: 1920px; margin-right: 0px;"
                    data-slider="5"
                    data-shallow-slider=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <a
                      href="https://www.mercadolibre.com.ar/ofertas/deco-navidena#DEAL_ID=MLA1168925&amp;S=MKT&amp;V=5&amp;T=MS&amp;L=MKTPLACE_T3_CROSS_DECONAVIDAD&amp;me.audience=all&amp;me.bu=3&amp;me.bu_line=26&amp;me.component_id=main_slider_web_ml_5&amp;me.content_id=main_slider_web_ml-1125-CROSS-DECONAVIDENA&amp;me.flow=-1&amp;me.logic=user_journey&amp;me.position=5&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_5&amp;content_id=main_slider_web_ml-1125-CROSS-DECONAVIDENA&amp;flow=-1&amp;logic=user_journey&amp;position=5&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=MKTPLACE_T3_CROSS_DECONAVIDAD&amp;c_element_order=6&amp;c_uid=9bc58df6-4865-475c-a313-c188c1514f07"
                      className="exhibitor-carousel-item-5"
                      tabindex="-1"
                    >
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/D_NQ_657991-MLA80886869747_112024-OO.webp"
                        alt="Deco Navideña, hasta 35% off y envíos en 24/48 horas"
                        tabindex="-1"
                      />
                    </a>
                  </div>
                  <div
                    role="group"
                    className="andes-carousel-snapped__slide"
                    aria-label="1 de 6"
                    // style="width: 1920px; margin-right: 0px;"
                    data-slider="0"
                  >
                    <a
                      href="https://www.mercadolibre.com.ar/black-friday#DEAL_ID=&amp;S=MKT&amp;V=1&amp;T=MS&amp;L=MKTPLACE_T1_CROSS_BLACKFRIDAY_PREVIA&amp;me.audience=all&amp;me.bu=3&amp;me.bu_line=26&amp;me.component_id=main_slider_web_ml_0&amp;me.content_id=main_slider_web_ml-1126-T1_CROSS_BLACKFRIDAY_PREVIA&amp;me.flow=-1&amp;me.logic=user_journey&amp;me.position=0&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_0&amp;content_id=main_slider_web_ml-1126-T1_CROSS_BLACKFRIDAY_PREVIA&amp;flow=-1&amp;logic=user_journey&amp;position=0&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=MKTPLACE_T1_CROSS_BLACKFRIDAY_PREVIA&amp;c_element_order=1&amp;c_uid=eba2c43a-8d97-4287-b5ac-db1d1bacaf03"
                      className="exhibitor-carousel-item-0"
                      tabindex="-1"
                    >
                      <img
                        decoding="sync"
                        src="https://http2.mlstatic.com/D_NQ_730705-MLA80887886873_112024-OO.webp"
                        className=""
                        fetchpriority="high"
                        alt="¡YA LLEGA EL BLACK FRIDAY! OFERTAS INCREÍBLES Y CUOTAS SIN INTERÉS"
                      />
                    </a>
                  </div>
                  <div
                    role="group"
                    className="andes-carousel-snapped__slide"
                    aria-label="2 de 6"
                    // style="width: 1920px; margin-right: 0px;"
                    data-slider="1"
                  >
                    <a
                      href="https://listado.mercadolibre.com.ar/_Container_solo-x-hoy-deportes-nov#DEAL_ID=MLA1169474&amp;S=MKT&amp;V=2&amp;T=MS&amp;L=MKTPLACE_SPORTS_ESPECIAL_DEPORTES_SOLOXHOY&amp;me.audience=all&amp;me.bu=3&amp;me.bu_line=46&amp;me.component_id=main_slider_web_ml_1&amp;me.content_id=main_slider_web_ml-1126-SPORTS_ESPECIAL_DEPORTES_SOLOXHOY&amp;me.flow=-1&amp;me.logic=user_journey&amp;me.position=1&amp;audience=all&amp;bu=3&amp;bu_line=46&amp;component_id=main_slider_web_ml_1&amp;content_id=main_slider_web_ml-1126-SPORTS_ESPECIAL_DEPORTES_SOLOXHOY&amp;flow=-1&amp;logic=user_journey&amp;position=1&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=MKTPLACE_SPORTS_ESPECIAL_DEPORTES_SOLOXHOY&amp;c_element_order=2&amp;c_uid=f56cf9f3-263f-4130-b9b5-27b7fcbfeba7"
                      className="exhibitor-carousel-item-1"
                      tabindex="-1"
                    >
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/D_NQ_721526-MLA80887931387_112024-OO.webp"
                        alt="¡LO MEJOR EN DEPORTES &amp; FITNESS! HASTA 40% OFF Y HASTA 6 CUOTAS SIN INTERÉS"
                      />
                    </a>
                  </div>
                  <div
                    role="group"
                    className="andes-carousel-snapped__slide"
                    aria-label="3 de 6"
                    // style="width: 1920px; margin-right: 0px;"
                    data-slider="2"
                  >
                    <a
                      href="https://www.mercadolibre.com.ar/c/ropa-y-accesorios#DEAL_ID=&amp;S=MKT&amp;V=2&amp;T=MS&amp;L=MKTPLACE_APPAREL_ESPECIAL_LONUEVO&amp;me.audience=all&amp;me.bu=3&amp;me.bu_line=13&amp;me.component_id=main_slider_web_ml_2&amp;me.content_id=main_slider_web_ml-1125-APPAREL-LONUEVO&amp;me.flow=-1&amp;me.logic=user_journey&amp;me.position=2&amp;audience=all&amp;bu=3&amp;bu_line=13&amp;component_id=main_slider_web_ml_2&amp;content_id=main_slider_web_ml-1125-APPAREL-LONUEVO&amp;flow=-1&amp;logic=user_journey&amp;position=2&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=MKTPLACE_APPAREL_ESPECIAL_LONUEVO&amp;c_element_order=3&amp;c_uid=1f59f484-8107-4cee-9de9-77dfa0b927dd"
                      className="exhibitor-carousel-item-2"
                      tabindex="-1"
                    >
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/D_NQ_782528-MLA80623207582_112024-OO.webp"
                        alt="Primavera verano 2025. ¡Lo nuevo en moda! Hasta 20% off y hasta 6 cuotas sin interés"
                      />
                    </a>
                  </div>
                  <div
                    role="group"
                    className="andes-carousel-snapped__slide andes-carousel-snapped__slide--previous"
                    aria-label="4 de 6"
                    // style="width: 1920px; margin-right: 0px;"
                    data-slider="3"
                  >
                    <a
                      href="https://listado.mercadolibre.com.ar/accesorios-vehiculos/_Container_ofertas-accesorios-para-vehiculo-2024#DEAL_ID=MLA943242&amp;S=ADV&amp;V=3&amp;T=MS&amp;L=MKTPLACE_ACC_ESPECIAL_SALIALARUTA&amp;me.audience=all&amp;me.bu=3&amp;me.bu_line=22&amp;me.component_id=main_slider_web_ml_3&amp;me.content_id=main_slider_web_ml-1125-ACC-SALIALARUTA&amp;me.flow=-1&amp;me.logic=user_journey&amp;me.position=3&amp;audience=all&amp;bu=3&amp;bu_line=22&amp;component_id=main_slider_web_ml_3&amp;content_id=main_slider_web_ml-1125-ACC-SALIALARUTA&amp;flow=-1&amp;logic=user_journey&amp;position=3&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=MKTPLACE_ACC_ESPECIAL_SALIALARUTA&amp;c_element_order=4&amp;c_uid=89188a29-b020-4617-989d-3d93a4afec33"
                      className="exhibitor-carousel-item-3"
                      tabindex="-1"
                    >
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/D_NQ_656264-MLA80939003907_112024-OO.webp"
                        alt="¡Ofertas especiales! Salí a la ruta, hasta 35% off y hasta 12 cuotas sin interés"
                      />
                    </a>
                  </div>
                  <div
                    role="group"
                    className="andes-carousel-snapped__slide andes-carousel-snapped__slide--active"
                    aria-label="5 de 6"
                    // style="width: 1920px; margin-right: 0px;"
                    data-slider="4"
                  >
                    <a
                      href="https://www.mercadolibre.com.ar/ofertas/martes-de-suplementos#DEAL_ID=&amp;S=MKT&amp;V=3&amp;T=MS&amp;L=MKTPLACE_HEALTH_ESPECIAL_MARTESSUPLEMENTOS&amp;me.audience=all&amp;me.bu=3&amp;me.bu_line=46&amp;me.component_id=main_slider_web_ml_4&amp;me.content_id=main_slider_web_ml-1126-HEALTH_ESPECIAL_MARTESSUPLEMENTOS&amp;me.flow=-1&amp;me.logic=user_journey&amp;me.position=4&amp;audience=all&amp;bu=3&amp;bu_line=46&amp;component_id=main_slider_web_ml_4&amp;content_id=main_slider_web_ml-1126-HEALTH_ESPECIAL_MARTESSUPLEMENTOS&amp;flow=-1&amp;logic=user_journey&amp;position=4&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=MKTPLACE_HEALTH_ESPECIAL_MARTESSUPLEMENTOS&amp;c_element_order=5&amp;c_uid=dd0da3c2-2956-4174-b4e7-f3d8668ab724"
                      className="exhibitor-carousel-item-4"
                    >
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/D_NQ_673406-MLA80686713754_112024-OO.webp"
                        alt="MARTES DE SUPLEMENTOS HASTA 40% OFF Y HASTA 5% OFF ADICIONAL"
                      />
                    </a>
                  </div>
                  <div
                    role="group"
                    className="andes-carousel-snapped__slide"
                    aria-label="6 de 6"
                    // style="width: 1920px; margin-right: 0px;"
                    data-slider="5"
                  >
                    <a
                      href="https://www.mercadolibre.com.ar/ofertas/deco-navidena#DEAL_ID=MLA1168925&amp;S=MKT&amp;V=5&amp;T=MS&amp;L=MKTPLACE_T3_CROSS_DECONAVIDAD&amp;me.audience=all&amp;me.bu=3&amp;me.bu_line=26&amp;me.component_id=main_slider_web_ml_5&amp;me.content_id=main_slider_web_ml-1125-CROSS-DECONAVIDENA&amp;me.flow=-1&amp;me.logic=user_journey&amp;me.position=5&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_5&amp;content_id=main_slider_web_ml-1125-CROSS-DECONAVIDENA&amp;flow=-1&amp;logic=user_journey&amp;position=5&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=MKTPLACE_T3_CROSS_DECONAVIDAD&amp;c_element_order=6&amp;c_uid=9bc58df6-4865-475c-a313-c188c1514f07"
                      className="exhibitor-carousel-item-5"
                      tabindex="-1"
                    >
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/D_NQ_657991-MLA80886869747_112024-OO.webp"
                        alt="Deco Navideña, hasta 35% off y envíos en 24/48 horas"
                      />
                    </a>
                  </div>
                  <div
                    role="group"
                    className="andes-carousel-snapped__slide"
                    aria-label="1 de 6"
                    // style="width: 1920px; margin-right: 0px;"
                    data-slider="0"
                    data-shallow-slider=""
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <a
                      href="https://www.mercadolibre.com.ar/black-friday#DEAL_ID=&amp;S=MKT&amp;V=1&amp;T=MS&amp;L=MKTPLACE_T1_CROSS_BLACKFRIDAY_PREVIA&amp;me.audience=all&amp;me.bu=3&amp;me.bu_line=26&amp;me.component_id=main_slider_web_ml_0&amp;me.content_id=main_slider_web_ml-1126-T1_CROSS_BLACKFRIDAY_PREVIA&amp;me.flow=-1&amp;me.logic=user_journey&amp;me.position=0&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_0&amp;content_id=main_slider_web_ml-1126-T1_CROSS_BLACKFRIDAY_PREVIA&amp;flow=-1&amp;logic=user_journey&amp;position=0&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=MKTPLACE_T1_CROSS_BLACKFRIDAY_PREVIA&amp;c_element_order=1&amp;c_uid=eba2c43a-8d97-4287-b5ac-db1d1bacaf03"
                      className="exhibitor-carousel-item-0"
                      tabindex="-1"
                    >
                      <img
                        decoding="sync"
                        src="https://http2.mlstatic.com/D_NQ_730705-MLA80887886873_112024-OO.webp"
                        className=""
                        fetchpriority="high"
                        alt="¡YA LLEGA EL BLACK FRIDAY! OFERTAS INCREÍBLES Y CUOTAS SIN INTERÉS"
                        tabindex="-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* <button
            className="andes-carousel-snapped__control andes-carousel-snapped__control--next andes-carousel-snapped__control--size-large"
            name="andes-carousel-snapped_control"
            data-andes-carousel-snapped-control="next"
            data-andes-state=""
            type="button"
            aria-label="Siguiente"
          >
            <span>
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="rgba(0, 0, 0, 0.9)"
              >
                <path
                  d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z"
                  fill="rgba(0, 0, 0, 0.9)"
                ></path>
              </svg>
            </span>
          </button> */}
            </div>
            {/* <ul
              class="andes-carousel-snapped__pagination andes-carousel-snapped__pagination--dark andes-carousel-snapped__pagination--position-inner"
              aria-hidden="true"
            >
              <li
                data-andes-carousel-snapped-pagination-item="true"
                data-andes-carousel-snapped-pagination-item-active="false"
              >
                <button
                  data-andes-carousel-snapped-pagination-action="true"
                  tabindex="-1"
                  type="button"
                >
                  <span class="andes-visually-hidden">Página 1</span>
                </button>
              </li>
              <li
                data-andes-carousel-snapped-pagination-item="true"
                data-andes-carousel-snapped-pagination-item-active="false"
              >
                <button
                  data-andes-carousel-snapped-pagination-action="true"
                  tabindex="-1"
                  type="button"
                >
                  <span class="andes-visually-hidden">Página 2</span>
                </button>
              </li>
              <li
                data-andes-carousel-snapped-pagination-item="true"
                data-andes-carousel-snapped-pagination-item-active="false"
              >
                <button
                  data-andes-carousel-snapped-pagination-action="true"
                  tabindex="-1"
                  type="button"
                >
                  <span class="andes-visually-hidden">Página 3</span>
                </button>
              </li>
              <li
                data-andes-carousel-snapped-pagination-item="true"
                data-andes-carousel-snapped-pagination-item-active="false"
              >
                <button
                  data-andes-carousel-snapped-pagination-action="true"
                  tabindex="-1"
                  type="button"
                >
                  <span class="andes-visually-hidden">Página 4</span>
                </button>
              </li>
              <li
                data-andes-carousel-snapped-pagination-item="true"
                data-andes-carousel-snapped-pagination-item-active="true"
              >
                <button
                  data-andes-carousel-snapped-pagination-action="true"
                  tabindex="-1"
                  type="button"
                >
                  <span class="andes-visually-hidden">Página 5</span>
                </button>
              </li>
              <li
                data-andes-carousel-snapped-pagination-item="true"
                data-andes-carousel-snapped-pagination-item-active="false"
              >
                <button
                  data-andes-carousel-snapped-pagination-action="true"
                  tabindex="-1"
                  type="button"
                >
                  <span class="andes-visually-hidden">Página 6</span>
                </button>
              </li>
            </ul> */}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Carrousell;
