import "./App.css";
import { DishCard } from "./components/Dishcard";
import { Filters } from "./components/Filters";
import { HeroHeader } from "./components/HeroHeader";
import { menuData } from "./data";
import { useFilter } from "./hooks/useFilter";
import { useMenu } from "./hooks/useMenu";

function App() {
  const { menu } = useMenu();
  const { filteredMenu } = useFilter();
  const Menu = filteredMenu(menu);
  return (
    <>
      <HeroHeader />
      <Filters state={menu} />
      <DishCard menuData={Menu} />
    </>
  );
}

export default App;
