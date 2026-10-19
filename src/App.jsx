import "./App.css";
import { DishCard } from "./components/Dishcard";
import { Filters } from "./components/Filters";
import { Footer } from "./components/Footer";
import { HeroHeader } from "./components/HeroHeader";
import { useFilter } from "./hooks/useFilter";
import { useMenu } from "./hooks/useMenu";

function App() {
  const { menu } = useMenu();
  const { searchName, handleChangeName, filteredMenu, handleChangeCategory } =
    useFilter();
  return (
    <>
      <HeroHeader />
      <Filters
        searchName={searchName}
        handleChangeName={handleChangeName}
        handleChangeCategory={handleChangeCategory}
      />
      <DishCard menuData={filteredMenu(menu)} />
      <Footer />
    </>
  );
}

export default App;
