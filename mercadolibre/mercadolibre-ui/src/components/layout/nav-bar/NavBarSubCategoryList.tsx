interface NavBarSubCategoryItemProps {
  id: number;
  name: string;
  items: string[];
}

interface NavBarSubCategoryProps {
  group: string;
  subcategories: NavBarSubCategoryItemProps[];
  isPointerOverSubcategory: boolean;
}

const NavBarSubCategoryItem: React.FC<NavBarSubCategoryProps> = ({
  group,
  subcategories,
  isPointerOverSubcategory
}) => {
  return (
    <div
      className="nav-categs-detail"
      data-js="nav-categs-detail"
      aria-modal="true"
      data-order="0"
      //   tabindex="-1"
      role="dialog"
      aria-label="Tecnología"
      hidden= {isPointerOverSubcategory ? "" : "hidden"}
    >
      {
        <header className="nav-categs-detail__header">
          <div role="heading" aria-level="1">
            {group}
          </div>
        </header>
      }
      <div className="nav-categs-detail__body">
        <div className="nav-categs-detail__body-content">
          {subcategories.map((subcategory, index) => (
            <div
              className="nav-categs-detail__categ"
              data-type="undefined"
              key={index}
            >
              <div
                className="nav-categs-detail__title"
                role="heading"
                aria-level="2"
              >
                <a href="https://www.mercadolibre.com.ar/c/celulares-y-telefonos#menu=categories">
                  {subcategory.name}
                </a>
              </div>
              <ul className="nav-categs-detail__categ-list">
                {subcategory.items.map((item, index) => (
                  <li key={index}>
                    <a href="https://listado.mercadolibre.com.ar/celulares-telefonos/celulares-smartphones/#menu=categories">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBarSubCategoryItem;

