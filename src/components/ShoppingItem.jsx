import './ShoppingItem.css'

export function ShoppingItem({ item }) {
  return (
  <div className="shopping-item">
    {item.name.de}
  </div>
  );
}
