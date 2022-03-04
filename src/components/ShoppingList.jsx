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

  console.log(shoppingItems);

  return (
    <>
      <div>
        <ShoppingListHeader />
      </div>
      <div>
        <ShoppingItemList />
      </div>

      <div>
        <ul>
          {shoppingItems.map((item) => (
            <li key={item.name.de}>{item.name.de}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
