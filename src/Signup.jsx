import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password
        })
      });

      if (!res.ok) throw new Error("Registration failed");

      await res.json();

      setMessage("✅ Registration successful! Redirecting to login...");

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setMessage("❌ Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <form onSubmit={handleRegister}>
          <div style={styles.field}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p style={styles.login}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login here
          </Link>
        </p>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(-45deg, #000000, #1a1a1a, #333333, #ffcc00)",
    backgroundSize: "400% 400%",
    animation: "gradientBG 15s ease infinite",
    color: "#f5f5f5"
  },
  card: {
    background: "linear-gradient(145deg, #1c1c1c, #2a2a2a)",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    color: "#f5f5f5",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",

    /* ✨ Gradient border that fades out */
    border: "3px solid transparent",
    borderImage: "linear-gradient(to right, #ffd700, transparent) 1",
    boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)"
  },
  title: {
    marginBottom: "20px",
    color: "#ffcc00",
    textShadow: "0 0 10px rgba(255, 204, 0, 0.8)"
  },
  field: {
    marginBottom: "14px",
    textAlign: "left"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#2a2a2a",
    color: "#f5f5f5",
    transition: "background 0.3s ease, transform 0.2s ease"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg, #ffd700, #ff9900)",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  },
  login: {
    marginTop: "15px"
  },
  link: {
    color: "#ffd700",
    textDecoration: "none",
    fontWeight: "bold"
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "#ffd700"
  }
};

export default Signup;