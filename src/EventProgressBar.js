import React from "react";
import styles from "./EventProgressBar.module.scss";

const EventProgressBar = ({ title, progress, estimatedHours }) => {
  return (
    <div className={styles.eventProgressContainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className={styles.details}>
        <span>Progress: {progress}%</span>
        <span>Estimated hours to completion: {estimatedHours}</span>
      </div>
    </div>
  );
};

export default EventProgressBar;
