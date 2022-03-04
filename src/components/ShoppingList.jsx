import { ShoppingListHeader } from "./ShoppingListHeader";
import { ShoppingItemList } from "./ShoppingItemList";
import { useEffect, useState } from "react";

export function ShoppingList() {
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    async function FetchShoppingItems() {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/api/shopping/items"
        );
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
        <ShoppingListHeader />
      </div>
      <div>
        <ShoppingItemList shoppingItems={shoppingItems} />
      </div>
    </>
  );
}
