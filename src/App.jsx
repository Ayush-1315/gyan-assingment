import "./App.css";
import Inventory from "./components/inventory";
import { invertory } from "./database/data";

function App() {
  console.log(invertory);
  return (
    <>
      <Inventory invertory={invertory} title={"Items Inventory"}/>
    </>
  );
}

export default App;
