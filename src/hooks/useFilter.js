import { useRef, useState } from "react";

export function useFilter() {
  const [searchName, setSearchName] = useState(" ");
  const [category, setCategory] = useState("");
  const searchNameRef = useRef();

  const handleChangeName = (e) => {
    setSearchName(e.target.value);
    searchNameRef.current = searchName;
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const filteredMenu = (menu) => {
    const initialMenu = [...menu];
    if (category !== "") console.log(category + "le estado");
    if (category === "all" || category === "") return initialMenu;

    return menu.filter((d) => d.category === category);
  };

  return {
    searchName,
    handleChangeName,
    handleChangeCategory,
    filteredMenu,
  };
}
