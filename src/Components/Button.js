import React from "react";

const Button = ({ label, primary, secondary, onClick }) => {
  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "5px",
    textAlign: "center",
    color: primary ? "white" : "black",
    backgroundColor: primary ? "blue" : secondary ? "gray" : "white",
    border: "2px solid blue",
    transition: "background-color 0.3s",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
