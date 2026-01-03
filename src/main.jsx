import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./global.css";
import App from "./App.jsx";
import { CartProvider } from "./CartContext";

createRoot(document.getElementById("root")).render(
 
    <CartProvider>
      <App />
    </CartProvider>
  
);