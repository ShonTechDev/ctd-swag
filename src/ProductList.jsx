import ProductCard from './ProductCard.jsx';

function ProductList({ inventory, handleAddItemToCart }) {
  return (
    <ul>
      {inventory.map((item) => {
        return (
          <li key={item.id}>
            <ProductCard
              id={item.id}
              baseName={item.baseName}
              baseDescription={item.baseDescription}
              handleAddItemToCart={handleAddItemToCart}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;