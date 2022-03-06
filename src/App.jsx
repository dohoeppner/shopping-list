import { ShoppingList } from "./components/ShoppingList";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { ActiveShoppingList } from "./components/ActiveShoppingList";
import './App.css';

export function App() {
  const [searchText, setSearchText] = useState("");
  const [activeItems, setActiveItems] = useState([]);
  return (
    <div className="App">
      <article>
        <ActiveShoppingList setActiveItems={setActiveItems} activeItems={activeItems} />
      </article>
      <article>
        <div>
          <h3>What do you want to buy?</h3>
        </div>
        <div>
          <SearchBar setSearchText={setSearchText} />
        </div>
      </article>
      <article>
        <ShoppingList searchText={searchText} setActiveItems={setActiveItems} activeItems={activeItems} />
      </article>
    </div>
  );
}
