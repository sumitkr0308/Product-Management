import { useState, useEffect } from "react";

function ProductForm({ onSave, selectedProduct, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  // Prefill form when editing
  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
    }
  }, [selectedProduct]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.category) newErrors.category = "Category is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSave(formData);
    setFormData({
      name: "",
      price: "",
      category: "",
      stock: "",
      description: ""
    });
    setErrors({});
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{selectedProduct ? "Edit Product" : "Add Product"}</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) =>
          setFormData({ ...formData, price: e.target.value })
        }
      />
      {errors.price && <span className="error">{errors.price}</span>}

      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) =>
          setFormData({ ...formData, category: e.target.value })
        }
      />
      {errors.category && <span className="error">{errors.category}</span>}

      <input
        type="number"
        placeholder="Stock"
        value={formData.stock}
        onChange={(e) =>
          setFormData({ ...formData, stock: e.target.value })
        }
      />

      <textarea
        placeholder="Description (optional)"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <div className="form-actions btn-group">
        <button type="submit">
          {selectedProduct ? "Update" : "ADD"}
        </button>
        {selectedProduct && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
