import React from "react";
import styles from "./RoadMapNode.module.scss";

const RoadmapNode = ({ label, onClick, progress, disabled }) => {
  // Set the colors for completed and not completed parts
  const completedColor = "rgb(173, 216, 230)"; // Blue for completed
  const notCompletedColor = "rgb(255, 255, 255)"; // White for not completed

  const backgroundStyle = {
    background: `linear-gradient(to right, ${completedColor} 0%, ${completedColor} ${progress}%, ${notCompletedColor} ${progress}%, ${notCompletedColor} 100%)`,
    opacity: 1, // Add opacity if disabled
    cursor: disabled ? "not-allowed" : "pointer", // Change cursor if disabled
  };

  return (
    <button
      className={styles.roadmapNode}
      onClick={onClick}
      style={backgroundStyle}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default RoadmapNode;
