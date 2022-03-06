import { ShoppingList } from "./components/ShoppingList";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { ActiveShoppingList } from "./components/ActiveShoppingList";

function App() {
  const [seachText, setSearchText] = useState("");
  const [activeItems, setActiveItems] = useState([]);
  return (
    <div className="App">
      <article>
        <ActiveShoppingList setActiveItems={setActiveItems} activeItems={activeItems}  />
      </article>
      <article>
        <div>
          <h2>What do you want to buy?</h2>
        </div>
        <div>
          <SearchBar setSearchText={setSearchText} />
        </div>
      </article>
      <article>
        <ShoppingList seachText={seachText} setActiveItems={setActiveItems} activeItems={activeItems} />
      </article>
    </div>
  );
}

export default App;
