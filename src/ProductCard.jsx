function ProductCard({ id, baseName, baseDescription, handleAddItemToCart }) {
  return (
    <div className="itemCard">
      <h2>{baseName}</h2>
      <p>{baseDescription}</p>
      <button onClick={() => handleAddItemToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;