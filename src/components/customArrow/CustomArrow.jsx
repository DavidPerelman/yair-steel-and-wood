import React from "react";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using lucide-react for arrow icons

const CustomArrow = ({ onClick, direction }) => {
  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [direction === "left" ? "left" : "right"]: "25px",
    zIndex: 2,
    cursor: "pointer",
    backgroundColor: "rgba(255, 255, 255, 0.804)", // Semi-transparent background
    borderRadius: "50%",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div onClick={onClick} style={arrowStyle}>
      {direction === "left" ? (
        <ChevronLeft color="#000000" size={24} /> // White left arrow
      ) : (
        <ChevronRight color="#000000" size={24} /> // White right arrow
      )}
    </div>
  );
};

export default CustomArrow;
