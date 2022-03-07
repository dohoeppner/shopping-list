import { ShoppingList } from "./components/ShoppingList";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";
import { ActiveShoppingList } from "./components/ActiveShoppingList";
import "./App.css";

export function App() {
  const initial = [];
  const [searchText, setSearchText] = useState("");
  const [activeItems, setActiveItems] = useState(() => getLocalStorage("items") ?? initial);

  useEffect(() => {
    setLocalStorage("items", activeItems);
  }, [activeItems]);

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
          <SearchBar setSearchText={setSearchText} searchText={searchText} />
        </div>
      </article>
      <article>
        <ShoppingList searchText={searchText} setActiveItems={setActiveItems} activeItems={activeItems} setSearchText={setSearchText} />
      </article>
    </div>
  );
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
