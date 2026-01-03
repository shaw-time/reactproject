import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import ViewProduct from "./ViewProduct";
import Cart from "./Cart"; 
import Checkout from "./Checkout";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AboutPage from "./AboutPage";
import Profile from "./Profile";
import MyOrders from "./MyOrders";



function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />

        <main style={{ flex: 1, padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/ViewProduct/:id" element={<ViewProduct />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/contactPage" element={<ContactPage />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/orders" element={<MyOrders />} />




          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;