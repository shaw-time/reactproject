import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data. Replace with API call or EmailJS integration.
    console.log("Form submitted:", formData);
    alert("Thank you! Your query has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.subtitle}>
        Have a question or feedback? Fill out the form below and we’ll get back to you.
      </p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          style={styles.textarea}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button style={styles.button} type="submit">
          Submit Query
        </button>
      </form>
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
    marginBottom: "0.5rem",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#ccc",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "4px",
    border: "1px solid #333",
    background: "#0d0d0d",
    color: "#f5f5f5",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.8rem",
    borderRadius: "4px",
    border: "1px solid #333",
    background: "#0d0d0d",
    color: "#f5f5f5",
    fontSize: "1rem",
    minHeight: "120px",
  },
  button: {
    padding: "0.8rem",
    background: "#ffcc00",
    color: "#0d0d0d",
    fontWeight: "700",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default ContactPage;