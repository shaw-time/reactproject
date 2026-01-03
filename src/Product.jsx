import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useCart } from "./CartContext";   
import "./Product.css";

const Product = () => {
  const { addToCart } = useCart();         

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParam, setSearchParam] = useSearchParams();
  const searchText = searchParam.get("q") || "";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = searchText
          ? `https://dummyjson.com/products/search?q=${searchText}`
          : "https://dummyjson.com/products";

        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const res = await axios.get(url, { headers });
        setProducts(res.data.products);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchText]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParam(value ? { q: value } : {});
  };

  return (
    <div className="product-container">
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search by product name..."
        className="search-input"
      />

      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && products.length === 0 && <p>No products found.</p>}

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={`Thumbnail of ${product.title}`} />
            <h3>{product.title}</h3>
            <p>Brand: {product.brand}</p>
            <p>₹{product.price}</p>

            
            <button onClick={() => addToCart(product)}>Add to Cart</button>

            <Link to={`/ViewProduct/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;