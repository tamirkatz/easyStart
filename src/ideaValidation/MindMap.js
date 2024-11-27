import React, { useState } from "react";
import Node from "./Node";
import styles from "./MindMap.module.scss";

const MindMap = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  const addNode = () => {
    const newNode = {
      id: nodes.length + 1,
      text: `Node ${nodes.length + 1}`,
      x: 100 + nodes.length * 50,
      y: 100,
    };
    setNodes([...nodes, newNode]);
  };

  const connectNodes = (startNode, endNode) => {
    setConnections([...connections, { startNode, endNode }]);
  };

  return (
    <div className={styles.mindMap}>
      <button onClick={addNode}>Add Node</button>
      <svg className={styles.connections}>
        {connections.map((connection, index) => (
          <line
            key={index}
            x1={connection.startNode.x}
            y1={connection.startNode.y}
            x2={connection.endNode.x}
            y2={connection.endNode.y}
            stroke="black"
          />
        ))}
      </svg>
      {nodes.map((node) => (
        <Node key={node.id} node={node} connectNodes={connectNodes} />
      ))}
    </div>
  );
};

export default MindMap;
