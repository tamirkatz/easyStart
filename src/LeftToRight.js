import React from "react";
import styles from "./LeftToRight.module.scss"; // Ensure this file exists and is properly styled
import RoadmapNode from "./RoadMapNode";
import { useNavigate } from "react-router-dom";

// Assuming the handleNodeClick function is provided from the parent or defined within a context
const LeftToRightLine = ({ nodes }) => {
  const navigate = useNavigate();
  const elements = nodes.map((node, index) => (
    <div className={styles.nodeContainer} key={node.label}>
      <RoadmapNode
        label={node.label}
        onClick={() => navigate(node.path)}
        progress={node.progress}
        disabled={node.isImplemented === false}
      />
      {index < nodes.length - 1 && <div className={styles.lineSegment} />}
    </div>
  ));

  return <div className={styles.horizontalLineContainer}>{elements}</div>;
};

export default LeftToRightLine;
