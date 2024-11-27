// HorizontalLineContainer.js
import React from "react";
import styles from "./HorizontalLineContainer.module.scss"; // Assume similar styling to RoadmapNode for alignment

export const HorizontalLineContainer = ({ children }) => {
  return <div className={styles.horizontalLineContainer}>{children}</div>;
};

export const VerticalLineContainer = ({ children }) => {
  return <div className={styles.verticalLineContainer}>{children}</div>;
};
