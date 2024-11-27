import React, { useState } from "react";
import styles from './Node.module.scss'

const Node = ({ node, connectNodes }) => {
  const [text, setText] = useState(node.text);

  const handleDrag = (e) => {
    node.x = e.clientX;
    node.y = e.clientY;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    node.x = e.clientX;
    node.y = e.clientY;
  };

  return (
    <div
      className={styles.node}
      style={{ left: node.x, top: node.y }}
      draggable
      onDrag={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Node;
