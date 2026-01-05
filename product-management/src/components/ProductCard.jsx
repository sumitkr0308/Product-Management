function ProductCard({ product, onEdit }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p className="desc">{product.description}</p>

      <button onClick={() => onEdit(product)}>Edit</button>
    </div>
  );
}

export default ProductCard;
