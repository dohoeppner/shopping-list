import { ShoppingItem } from "./ShoppingItem";
import './ShoppingItemList.css'

export function ShoppingItemList({ shoppingItems, searchText, setActiveItems, activeItems }) {
  return (
    <div className="shopping-items">
      {shoppingItems.filter((item) => item.name.de === searchText).map((item) => (
        <ShoppingItem item={item} setActiveItems={setActiveItems} activeItems={activeItems} />
      ))}
    </div>
  );
}
