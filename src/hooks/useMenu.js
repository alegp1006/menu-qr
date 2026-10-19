import { useState } from "react";
import { menuData } from "../data";

export function useMenu() {
  const [menu, setMenu] = useState(menuData);

  return {
    menu,
    setMenu,
  };
}
