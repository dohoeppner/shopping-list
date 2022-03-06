export function ActiveShoppingList({ activeItems }) {
  return (
    <>
      <h3>Shopping List</h3>
      <div className="shopping-items">
        {activeItems.map((item, index) => (
          <button key={item.name.de + index} className="shopping-item">
            {item.name.de}
          </button>
        ))}
      </div>
    </>
  );
}
