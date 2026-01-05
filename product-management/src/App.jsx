import { useState, useEffect } from "react";
import ProductTable from "./components/ProductTable";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import Pagination from "./components/Pagination";
import "./index.css";

function App() {
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Microscope",
      price: 5000,
      category: "Lab Equipment",
      stock: 10,
      description: "High precision lab microscope"
    },
    {
      id: 2,
      name: "Test Tube Set",
      price: 1200,
      category: "Accessories",
      stock: 25,
      description: "Set of 12 glass test tubes"
    },
    {
      id: 3,
      name: "Centrifuge",
      price: 15000,
      category: "Lab Equipment",
      stock: 5,
      description: "High speed centrifuge machine"
    },
    {
      id: 4,
      name: "Beaker Set",
      price: 800,
      category: "Accessories",
      stock: 40,
      description: "Glass beaker set"
    },
    {
      id: 5,
      name: "Thermometer",
      price: 300,
      category: "Lab Equipment",
      stock: 60,
      description: "Digital thermometer"
    },
    {
      id: 6,
      name: "Petri Dish",
      price: 150,
      category: "Accessories",
      stock: 100,
      description: "Plastic petri dishes"
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProducts(
        products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      );
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, products]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSave = (product) => {
    if (product.id) {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <h1>Product Management App</h1>

      <ProductForm
        onSave={handleSave}
        selectedProduct={selectedProduct}
        onCancel={() => setSelectedProduct(null)}
      />

      <input
        className="search-input"
        placeholder="Search product..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="view-toggle">
        <button
          className={view === "list" ? "active" : ""}
          onClick={() => setView("list")}
        >
          List View
        </button>
        <button
          className={view === "card" ? "active" : ""}
          onClick={() => setView("card")}
        >
          Card View
        </button>
      </div>

      {view === "list" ? (
        <ProductTable
          products={paginatedProducts}
          onEdit={setSelectedProduct}
        />
      ) : (
        <div className="card-grid">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={setSelectedProduct}
            />
          ))}
        </div>
      )}

      <Pagination
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
