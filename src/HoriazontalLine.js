import React from 'react';
import styles from './HorizontalLine.module.scss';

const HorizontalLine = ({ numButtons }) => {
  const buttons = Array.from({ length: numButtons }, (_, index) => (
    <div
      className={styles.button}
      style={{ left: `${(index + 1) / (numButtons + 1) * 100}%` }}
      key={index}
    />
  ));

  return (
    <div className={styles.horizontalLine}>
      {buttons}
    </div>
  );
};

export default HorizontalLine;
