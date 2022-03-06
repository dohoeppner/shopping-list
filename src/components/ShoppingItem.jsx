import "./ShoppingItem.css";

export function ShoppingItem({ item, setActiveItems, activeItems }) {
  function handleItemClick() {
    setActiveItems([...activeItems, item]);
  }
  return (
    <button className="shopping-item" onClick={handleItemClick}>
      {item.name.de}
    </button>
  );
}
