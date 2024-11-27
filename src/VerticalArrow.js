import React from "react";
import styles from "./VerticalArrow.module.scss"; // Adjust this file as needed

const VerticalArrow = ({ left, bottom }) => {
  console.log(bottom);
  const style = {
    left: `${left}px`,
    bottom: `${bottom}px`,
  };

  return <div className={styles.verticalArrow} style={style}></div>;
};

export default VerticalArrow;
