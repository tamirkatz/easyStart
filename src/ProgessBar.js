import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ progress }) => (
  <div className={styles.progressBarContainer}>
    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
  </div>
);

export default ProgressBar;
