import { useCart } from "./CartContext";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // fetch product details if id is present
  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  // include quantity in total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(total)

  return (
    <div>
      <h2>Your Cart</h2>

      {/* If viewing a single product */}
      {product && (
        <div>
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      )}

      {/* Cart items */}
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <h3>{item.title}</h3>
              <p>
                ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
              </p>
              <div style={styles.controls}>
                <button onClick={() => decreaseQuantity(item.id)}>−</button>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

const styles = {
  cartItem: {
    marginBottom: "1rem",
    padding: "0.5rem",
    borderBottom: "1px solid #ccc",
  },
  controls: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.5rem",
  },
};

export default Cart;