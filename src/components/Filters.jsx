import { useEffect, useState } from "react";
import "./filters.css";

export function Filters({
  searchName,
  handleChangeName,
  handleChangeCategory,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activa la clase .visible al montar el componente
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`filters-container ${isVisible ? "visible" : ""}`}>
      <div className="filters-search-wrapper">
        <label className="filters-label-search">
          Buscar plato
          <input
            type="text"
            value={searchName}
            onChange={handleChangeName}
            placeholder="Ej. Pizza, Helado..."
            className="filters-input-text"
          />
        </label>
      </div>

      <fieldset className="filters-fieldset">
        <legend className="filters-legend">Categorías</legend>

        <label className="filters-radio-label">
          <input
            type="radio"
            onChange={handleChangeCategory}
            name="menu"
            id="category1"
            value="all"
            defaultChecked
          />
          Todos
        </label>

        <label className="filters-radio-label">
          <input
            type="radio"
            onChange={handleChangeCategory}
            name="menu"
            id="category2"
            value="entradas"
          />
          Entrantes
        </label>

        <label className="filters-radio-label">
          <input
            type="radio"
            onChange={handleChangeCategory}
            name="menu"
            id="category3"
            value="principales"
          />
          Principales
        </label>

        <label className="filters-radio-label">
          <input
            type="radio"
            onChange={handleChangeCategory}
            name="menu"
            id="category4"
            value="helados"
          />
          Helados
        </label>

        <label className="filters-radio-label">
          <input
            type="radio"
            onChange={handleChangeCategory}
            name="menu"
            id="category5"
            value="bebidas"
          />
          Bebidas
        </label>

        <label className="filters-radio-label">
          <input
            type="radio"
            onChange={handleChangeCategory}
            name="menu"
            id="category6"
            value="pizzas"
          />
          Pizzas
        </label>
      </fieldset>
    </div>
  );
}
