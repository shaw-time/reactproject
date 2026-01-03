import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brand}>
          <h2 style={styles.logo}>ShopperStop</h2>
          <p style={styles.tagline}>Your trusted shopping partner</p>
        </div>

       

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact Us</h3>
          <p>Email: support@ShopperStop.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Mumbai, India</p>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>📘</a>
            <a href="#" style={styles.icon}>📸</a>
            <a href="#" style={styles.icon}>🐦</a>
            <a href="#" style={styles.icon}>💼</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} ShopperStop. All rights reserved.</p>
        <div>
          <Link style={styles.navLink} to="/privacy">Privacy Policy</Link> | 
          <Link style={styles.navLink} to="/terms"> Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0d0d0d",
    color: "#f5f5f5",
    padding: "2rem",
    marginTop: "2rem",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    marginBottom: "2rem",
  },
  brand: {
    textAlign: "left",
  },
  logo: {
    color: "#ffcc00",
    marginBottom: "0.5rem",
  },
  tagline: {
    fontSize: "0.9rem",
    color: "#ccc",
  },
  section: {
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#ffcc00",
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  navLink: {
    color: "#f5f5f5",
    textDecoration: "none",
    display: "block",
    marginBottom: "0.3rem",
    transition: "color 0.3s ease",
  },
  socialIcons: {
    display: "flex",
    gap: "0.5rem",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#f5f5f5",
    textDecoration: "none",
    transition: "transform 0.3s ease",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontSize: "0.9rem",
    color: "#ccc",
  },
};

export default Footer;