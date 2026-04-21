function ProductList({ inventory }) {
  return (
    <ul>
      {inventory.map((item) => {
        return (
          <li key={item.id}>
            <div className="itemCard">
              <h2>{item.baseName}</h2>
              <p>{item.baseDescription}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;