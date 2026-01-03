import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Get existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Create new order
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price
      })),
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: "Processing"
    };

    // Save updated orders list
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // Clear cart
    clearCart();

    // Redirect to My Orders page
    navigate("/orders");
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>

      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty. Add items to proceed.</p>
      ) : (
        <>
          <div style={styles.cartList}>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <span>{item.title} (x{item.quantity})</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <h3>Total: ₹{totalPrice}</h3>
          </div>

          <button style={styles.button} onClick={handleCheckout}>
            Confirm Purchase
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    background: "#1a1a1a",
    color: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
  },
  title: {
    textAlign: "center",
    color: "#ffcc00",
    marginBottom: "1rem",
  },
  empty: {
    textAlign: "center",
    color: "#ccc",
  },
  cartList: {
    marginBottom: "1rem",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  summary: {
    textAlign: "right",
    marginTop: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    padding: "0.8rem",
    background: "#ffcc00",
    color: "#0d0d0d",
    fontWeight: "700",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1rem",
    transition: "background 0.3s ease",
  },
};

export default Checkout;