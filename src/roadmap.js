// Roadmap.js
import React from "react";
import styles from "./Roadmap.module.scss";
import { useNavigate } from "react-router-dom";
import RoadmapNode from "./RoadMapNode";

const Roadmap = ({ nodes }) => {
  let navigate = useNavigate();
  const handleNodeClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.roadmap}>
      <div className={styles.roadmapLine} />
      <div className={styles.roadmapNodes}>
        {nodes.map((node) => (
          <RoadmapNode
            key={node.label}
            label={node.label}
            onClick={() => handleNodeClick(node.path)}
            progress={node.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
