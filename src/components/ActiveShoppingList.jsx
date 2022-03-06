export function ActiveShoppingList({ activeItems }) {
  return (
    <div className="shoppin-items">
      {activeItems.map((item, index) => (
        <div key={index}>
          <p>{item.name.de}</p>
        </div>
      ))}
    </div>
  );
}
