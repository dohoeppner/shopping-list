import { ShoppingItem } from "./ShoppingItem";
import './ShoppingItemList.css'

export function ShoppingItemList({ shoppingItems }) {
  return (
    <div className="shoppin-items">
      {shoppingItems.map((item) => (
        <ShoppingItem item={item} />
      ))}
    </div>
  );
}
