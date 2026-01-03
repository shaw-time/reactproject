import React from "react";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About ShopperStop</h1>
      <p style={styles.intro}>
        Welcome to <span style={styles.highlight}>ShopperStop</span>, your trusted destination for
        quality products and seamless shopping experiences. Since our inception, we’ve been
        committed to bringing customers closer to the brands they love, while ensuring affordability
        and convenience.
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          At ShopperStop, our mission is simple: to make shopping effortless, enjoyable, and
          accessible for everyone. We strive to deliver exceptional value by offering a wide range
          of products, curated collections, and personalized services.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <ul style={styles.list}>
          <li>✅ Customer-first approach — your satisfaction is our priority.</li>
          <li>✅ Integrity — we believe in transparent and ethical practices.</li>
          <li>✅ Innovation — constantly evolving to meet modern shopping needs.</li>
          <li>✅ Community — supporting local and global initiatives.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <p style={styles.text}>
          With a blend of trusted brands, secure payment options, and fast delivery, ShopperStop
          stands out as a one-stop solution for all your shopping needs. Whether you’re looking for
          fashion, electronics, or lifestyle essentials, we’ve got you covered.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Join Our Journey</h2>
        <p style={styles.text}>
          We’re more than just a store — we’re a community of shoppers, dreamers, and creators.
          Thank you for choosing ShopperStop. Together, let’s redefine the way the world shops.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "2rem",
    background: "#1a1a1a",
    color: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    lineHeight: "1.6",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#ffcc00",
    marginBottom: "1rem",
  },
  intro: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  highlight: {
    color: "#ffcc00",
    fontWeight: "bold",
  },
  section: {
    marginBottom: "2rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#ffcc00",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1rem",
    color: "#ddd",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    fontSize: "1rem",
    color: "#ddd",
  },
};

export default AboutPage;