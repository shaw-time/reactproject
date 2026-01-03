import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const adminRole = localStorage.getItem("adminRole");

  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("adminRole");
    navigate("/login");
  };

  const handleLoginSelect = (role) => {
    setShowLoginDropdown(false);
    if (role === "admin") {
      navigate("/adminlogin"); // redirect to admin login page
    } else {
      navigate("/login"); // redirect to user login page
    }
  };

  // Role-based admin links
  const roleLinks = {
    superadmin: [
      { name: "Dashboard", url: "/admin/dashboard" },
      { name: "Manage Users", url: "/admin/users" },
      { name: "Site Settings", url: "/admin/settings" },
      { name: "Reports", url: "/admin/reports" }
    ],
    editor: [{ name: "Content Manager", url: "/editor/content" }],
    moderator: [{ name: "Moderation Panel", url: "/moderator/panel" }]
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>ShopperStop</h1>
      <nav aria-label="Main navigation" style={styles.nav}>
        <ul style={styles.navList}>
          <li>
            <Link
              style={{
                ...styles.navLink,
                ...(location.pathname === "/" ? styles.activeLink : {})
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                ...styles.navLink,
                ...(location.pathname === "/product" ? styles.activeLink : {})
              }}
              to="/product"
            >
              Products
            </Link>
          </li>

          {/* Conditional links based on login */}
          {token && user ? (
            <>
              <li>
                <span style={styles.navLink}>👋 {user.firstName}</span>
              </li>
              <li>
                <Link
                  style={{
                    ...styles.navLink,
                    ...(location.pathname === `/profile/${user.id}`
                      ? styles.activeLink
                      : {})
                  }}
                  to={`/profile/${user.id}`}
                >
                  Profile
                </Link>
              </li>

              {/* Show My Orders only for normal users */}
              {!adminRole && (
                <li>
                  <Link
                    style={{
                      ...styles.navLink,
                      ...(location.pathname === "/orders" ? styles.activeLink : {})
                    }}
                    to="/orders"
                  >
                    My Orders
                  </Link>
                </li>
              )}

              <li>
                <button onClick={handleLogout} style={styles.logoutBtn}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Login dropdown */}
              <li style={{ position: "relative" }}>
                <span
                  style={{
                    ...styles.navLink,
                    cursor: "pointer",
                    ...(location.pathname === "/login" ? styles.activeLink : {})
                  }}
                  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                >
                  Login ▾
                </span>
                {showLoginDropdown && (
                  <ul style={styles.dropdownMenu}>
                    <li
                      style={styles.dropdownItem}
                      onClick={() => handleLoginSelect("user")}
                    >
                      User
                    </li>
                    <li
                      style={styles.dropdownItem}
                      onClick={() => handleLoginSelect("admin")}
                    >
                      Admin
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  style={{
                    ...styles.navLink,
                    ...(location.pathname === "/signup" ? styles.activeLink : {})
                  }}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    ...styles.navLink,
                    ...(location.pathname === "/aboutpage" ? styles.activeLink : {})
                  }}
                  to="/aboutpage"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    ...styles.navLink,
                    ...(location.pathname === "/contactpage" ? styles.activeLink : {})
                  }}
                  to="/contactpage"
                >
                  Contact
                </Link>
              </li>
            </>
          )}

          {/* Admin role-based links (only after login) */}
          {adminRole &&
            roleLinks[adminRole]?.map((link) => (
              <li key={link.url}>
                <Link
                  style={{
                    ...styles.navLink,
                    ...(location.pathname === link.url ? styles.activeLink : {})
                  }}
                  to={link.url}
                >
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>

        {/* Cart Icon Link */}
        <Link to="/cart" style={styles.cartLink}>
          <FaShoppingCart style={styles.cartIcon} />
          <span style={styles.cartCount}>{cart.length}</span>
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "linear-gradient(90deg, #0d0d0d, #1a1a1a)",
    padding: "1rem 2rem",
    color: "#f5f5f5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  title: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: "900",
    background: "linear-gradient(90deg, #ffcc00, #ff9900)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "2px",
    textShadow: "0 0 12px rgba(255, 204, 0, 0.9)",
    cursor: "pointer",
    transition: "transform 0.3s ease"
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "2rem"
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0
  },
  navLink: {
    color: "#f5f5f5",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    position: "relative",
    transition: "color 0.3s ease"
  },
  activeLink: {
    color: "#ffcc00",
    borderBottom: "2px solid #ffcc00"
  },
  cartLink: {
    display: "flex",
    alignItems: "center",
    color: "#f5f5f5",
    textDecoration: "none",
    fontSize: "1.2rem",
    position: "relative"
  },
  cartIcon: {
    fontSize: "1.5rem"
  },
  cartCount: {
    marginLeft: "0.4rem",
    background: "#ffcc00",
    color: "#000",
    borderRadius: "50%",
    padding: "0.2rem 0.5rem",
    fontSize: "0.8rem",
    fontWeight: "bold"
  },
  logoutBtn: {
    background: "transparent",
    border: "none",
    color: "#f5f5f5",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem"
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    background: "#1a1a1a",
    listStyle: "none",
    padding: "0.5rem",
    margin: 0,
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "4px"
  },
  dropdownItem: {
    padding: "0.5rem 1rem",
    color: "#f5f5f5",
    cursor: "pointer"
  }
};

export default Header;