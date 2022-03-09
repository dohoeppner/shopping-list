import { ShoppingItem } from "./ShoppingItem/ShoppingItem";
import "./ShoppingItemList.css";
import { search } from "fast-fuzzy";

export function ShoppingItemList({
  shoppingItems,
  searchText,
  setActiveItems,
  activeItems,
  setSearchText,
}) {
  return (
    <div className="shopping-items">
      {shoppingItems
        .filter((item) => item.name.de === searchText)
        .map((item) => (
          <ShoppingItem
            item={item}
            setActiveItems={setActiveItems}
            activeItems={activeItems}
            setSearchText={setSearchText}
          />
        ))}
    </div>
  );
}
