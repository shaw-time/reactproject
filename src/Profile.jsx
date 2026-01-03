import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          {user.firstName} {user.lastName}'s Profile
        </h2>
        <p style={styles.text}>User ID: {id}</p>
        <p style={styles.text}>Email: {user.email}</p>
        <p style={styles.text}>Username: {user.username}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Animated gradient background
    background: "linear-gradient(-45deg, #1a1a1a, #333, #ffcc00, #ff6600)",
    backgroundSize: "400% 400%",
    animation: "gradientBG 15s ease infinite",
    color: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "rgba(30,30,30,0.9)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#ffcc00",
  },
  text: {
    fontSize: "1.1rem",
    margin: "0.5rem 0",
  },
};

// Add keyframes for gradient animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes gradientBG {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}`, styleSheet.cssRules.length);

export default Profile;