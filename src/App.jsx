import "./App.css";
import Inventory from "./components/inventory";
import { inventory,categories } from "./database/data";

function App() {
  return (
    <>
      <Inventory inventory={inventory} title={"Items Inventory"} categories={categories}/>
    </>
  );
}

export default App;
