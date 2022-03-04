import { useState } from 'react'
import { ShoppingList } from './components/ShoppingList'
import { SearchBox } from './components/SearchBox'

function App() {
 

  return (
    <div className="App">
      <article><ShoppingList/></article>
      <article><SearchBox/></article>
    </div>
  );
}

export default App
