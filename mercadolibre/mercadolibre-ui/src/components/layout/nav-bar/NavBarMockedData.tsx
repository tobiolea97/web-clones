import { NavBarMenuItemType } from "./NavBarTypes";

const menuItems: NavBarMenuItemType[] = [
  {
    id: 1,
    label: "Ofertas",
    url: "https://www.mercadolibre.com.ar/ofertas#nav-header",
  },
  {
    id: 2,
    label: "Cupones",
    url: "https://www.mercadolibre.com.ar/cupones?source_page=mperfil#nav-header",
  },
  {
    id: 3,
    label: "Supermercado",
    url: "https://www.mercadolibre.com.ar/ofertas/supermercadolibre#nav-header",
  },
  {
    id: 4,
    label: "Moda",
    url: "https://www.mercadolibre.com.ar/c/ropa-y-accesorios#nav-header",
  },
  {
    id: 5,
    label: "Mercado Play",
    url: "https://play.mercadolibre.com.ar/?origin=navigation_menu_web#nav-header",
  },
  {
    id: 6,
    label: "Vender",
    url: "https://www.mercadolibre.com.ar/syi/core/list#nav-header",
  },
  {
    id: 7,
    label: "Ayuda",
    url: "https://www.mercadolibre.com.ar/ayuda#nav-header",
  },
];

const categories = [
  {
    id: 1,
    label: "Vehículos",
    url: "https://www.mercadolibre.com.ar/vehiculos/#menu=categories",
  },
  {
    id: 2,
    label: "Inmuebles",
    url: "https://www.mercadolibre.com.ar/inmuebles/#menu=categories",
  },
  {
    id: 3,
    label: "Supermercado",
    url: "https://www.mercadolibre.com.ar/ofertas/supermercado#menu=categories",
  },
  {
    id: 4,
    label: "Tecnología",
    url: "#/",
  },
  {
    id: 5,
    label: "Hogar y Muebles",
    url: "https://www.mercadolibre.com.ar/c/hogar-muebles-y-jardin#menu=categories",
  },
  {
    id: 6,
    label: "Electrodomésticos",
    url: "https://www.mercadolibre.com.ar/c/electrodomesticos-y-aires-ac#menu=categories",
  },
  {
    id: 7,
    label: "Herramientas",
    url: "https://www.mercadolibre.com.ar/c/herramientas#menu=categories",
  },
  {
    id: 8,
    label: "Construcción",
    url: "https://www.mercadolibre.com.ar/c/construccion#menu=categories",
  },
  {
    id: 9,
    label: "Deportes y Fitness",
    url: "https://www.mercadolibre.com.ar/c/deportes-y-fitness#menu=categories",
  },
  {
    id: 10,
    label: "Accesorios para Vehículos",
    url: "https://www.mercadolibre.com.ar/c/accesorios-para-vehiculos#menu=categories",
  },
  {
    id: 11,
    label: "Moda",
    url: "https://www.mercadolibre.com.ar/c/ropa-y-accesorios#menu=categories",
  },
  {
    id: 12,
    label: "Juegos y Juguetes",
    url: "https://www.mercadolibre.com.ar/c/juegos-y-juguetes#menu=categories",
  },
  {
    id: 13,
    label: "Bebés",
    url: "https://www.mercadolibre.com.ar/c/bebes#menu=categories",
  },
  {
    id: 14,
    label: "Belleza y Cuidado Personal",
    url: "https://www.mercadolibre.com.ar/c/belleza-y-cuidado-personal#menu=categories",
  },
  {
    id: 15,
    label: "Salud y Equipamiento Médico",
    url: "https://www.mercadolibre.com.ar/c/salud-y-equipamiento-medico#menu=categories",
  },
  {
    id: 16,
    label: "Industrias y Oficinas",
    url: "https://www.mercadolibre.com.ar/c/industrias-y-oficinas#menu=categories",
  },
  {
    id: 17,
    label: "Agro",
    url: "https://www.mercadolibre.com.ar/c/agro#menu=categories",
  },
  {
    id: 18,
    label: "Productos Sustentables",
    url: "https://www.mercadolibre.com.ar/productos-sustentables#menu=categories",
  },
  {
    id: 19,
    label: "Servicios",
    url: "https://www.mercadolibre.com.ar/c/servicios#menu=categories",
  },
  {
    id: 20,
    label: "Más vendidos",
    url: "https://www.mercadolibre.com.ar/mas-vendidos#menu=categories",
  },
  {
    id: 21,
    label: "Tiendas oficiales",
    url: "https://www.mercadolibre.com.ar/tiendas-oficiales#menu=categories",
  },
  {
    id: 22,
    label: "Ver más categorías",
    url: "https://www.mercadolibre.com.ar/categorias#menu=categories",
  },
];

const subcategories = [
  {
    group: "Technology",
    subcategories: [
      {
        id: 1,
        name: "Celulares y Teléfonos",
        items: [
          "Celulares y Smartphones",
          "Accesorios para Celulares",
          "Repuestos de Celulares",
        ],
      },
      {
        id: 2,
        name: "Computación",
        items: [
          "Componentes de PC",
          "Impresión",
          "Tablets y Accesorios",
          "PC",
          "Conectividad y Redes",
          "Monitores y Accesorios",
        ],
      },
      {
        id: 3,
        name: "Cámaras y Accesorios",
        items: [
          "Cámaras Digitales",
          "Accesorios para Cámaras",
          "Filmadoras y Cámaras de Acción",
        ],
      },
      {
        id: 4,
        name: "Electrónica, Audio y Video",
        items: [
          "Audio",
          "Accesorios para Audio y Video",
          "Componentes Electrónicos",
          "Drones y Accesorios",
          "Audio para Vehículos",
          "Televisores",
        ],
      },
      {
        id: 5,
        name: "Consolas y Videojuegos",
        items: ["Videojuegos", "Para PlayStation", "Para Nintendo"],
      },
      {
        id: 6,
        name: "Televisores",
        items: [],
      },
    ],
  },
];

export { menuItems, categories, subcategories };
