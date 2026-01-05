function ProductTable({ products, onEdit }) {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price (₹)</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              No products found
            </td>
          </tr>
        ) : (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => onEdit(product)}>Edit</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
