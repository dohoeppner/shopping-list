import "./ShoppingItem.css";

export function ShoppingItem({ item, setActiveItems, activeItems, setSearchText }) {
  function handleItemClick() {
    setActiveItems([...activeItems, item]);
    setSearchText('');
  }
  return (
    <button className="shopping-item" onClick={handleItemClick}>
      {item.name.de}
    </button>
  );
}
