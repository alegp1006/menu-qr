import { useState } from "react";

export function useFilter() {
  const [searchName, setSearchName] = useState("");
  const [category, setCategory] = useState("all");

  const handleChangeName = (e) => {
    setSearchName(e.target.value);
    console.log(searchName);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const filteredMenu = (menu = []) => {
    if (!Array.isArray(menu)) return [];

    return menu.filter((d) => {
      if (!d || !d.title) return false;

      // 1. Filtro por categoría
      const matchesCategory =
        category === "all" ||
        (d.category && d.category.toLowerCase() === category.toLowerCase());

      // 2. Filtro por nombre (texto de búsqueda)
      const query = searchName ? searchName.toLowerCase().trim() : "";
      const matchesName = d.title.toLowerCase().includes(query);

      // El plato debe cumplir ambas condiciones
      return matchesCategory && matchesName;
    });
  };

  return {
    searchName,
    handleChangeName,
    handleChangeCategory,
    filteredMenu,
  };
}
