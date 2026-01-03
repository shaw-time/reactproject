import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id} style={{ marginBottom: "1rem" }}>
              <strong>Order #{order.id}</strong> — {order.date}
              <div>Items: {order.items.join(", ")}</div>
              <div>Total: ₹{order.total}</div>
              <div>Status: {order.status}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;