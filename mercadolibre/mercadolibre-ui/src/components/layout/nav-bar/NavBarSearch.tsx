import { useState } from "react";

interface NavBarSearchProps {
  setIsPointerOverMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarSearch: React.FC<NavBarSearchProps> = ({
  setIsPointerOverMenu,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="nav-area nav-top-area nav-center-area"
      onMouseEnter={() => {
        setIsPointerOverMenu(false);
      }}
    >
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
          value={searchValue}
          onChange={handleSearch}
          aria-activedescendant=""
          aria-controls="sb-suggestions-1"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
        />
        <button type="submit" className="nav-search-btn">
          <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
        </button>
        <div
          role="listbox"
          className="sb-suggestions"
          id="sb-suggestions-1"
          aria-hidden="true"
        >
          <ul role="group" className="sb-suggestions__list" id="cb1-list"></ul>
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
  );
};

export default NavBarSearch;
