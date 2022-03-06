import { ShoppingItem } from "./ShoppingItem";
import './ShoppingItemList.css'

export function ShoppingItemList({ shoppingItems, seachText, setActiveItems, activeItems }) {
  return (
    <div className="shoppin-items">
      {shoppingItems.filter((item) => item.name.de === seachText).map((item) => (
        <ShoppingItem item={item} setActiveItems={setActiveItems} activeItems={activeItems} />
      ))}
    </div>
  );
}
