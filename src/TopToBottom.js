import React from "react";
import styles from "./TopToBottom.module.scss";

const TopToBottomLine = ({ numButtons }) => {
  const elements = numButtons.map((_, index) => (
    <React.Fragment key={index}>
      <div className={styles.button} />
      {index < numButtons.length - 1 && <div className={styles.lineSegment} />}
    </React.Fragment>
  ));

  return <div className={styles.topToBottomLine}>{elements}</div>;
};

export default TopToBottomLine;
