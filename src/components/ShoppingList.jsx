import { ShoppingItemList } from "./ShoppingItemList";
import { useEffect, useState } from "react";

export function ShoppingList({ searchText, setActiveItems, activeItems, setSearchText }) {
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    async function FetchShoppingItems() {
      try {
        const response = await fetch("https://fetch-me.vercel.app/api/shopping/items");
        const data = await response.json();
        setShoppingItems(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    FetchShoppingItems();
  }, []);

  return (
    <>
      <div>
        <ShoppingItemList
          shoppingItems={shoppingItems}
          searchText={searchText}
          setActiveItems={setActiveItems}
          activeItems={activeItems}
          setSearchText={setSearchText}
        />
      </div>
    </>
  );
}
