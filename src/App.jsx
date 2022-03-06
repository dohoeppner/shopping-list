import { useState, useEffect } from "react";
import { ShoppingList } from "./components/ShoppingList";
import {SearchHeader} from './components/SearchHeader';
import {SearchBar} from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <article>
        <ShoppingList />
      </article>
      <article>
        <div>
          <SearchHeader />
        </div>
        <div>
          <SearchBar />
        </div>
      </article>
    </div>
  );
}

export default App;
