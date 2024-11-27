import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./newRoadMap.module.scss";
import LeftToRightLine from "./LeftToRight";
import RightToLeftLine from "./RightToLeft";
import RoadmapNode from "./RoadMapNode";
import VerticalArrow from "./VerticalArrow";

const Roadmap = ({ nodes }) => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    // Initial size
    handleResize();

    // Event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNodeClick = (path) => {
    console.log("path to be moved to", path);
    navigate(path);
  };

  const renderNodesInLines = () => {
    const elements = [];
    let index = 0;
    let isLeftToRight = true;
    let lineNumber = 0;
    const lineHeight = 180; // Adjust this as needed
    const gap = 160; // Adjust this as needed
    console.log(nodes);
    while (index < nodes.length) {
      const lineNodes = nodes.slice(index, index + 3);
      let LineComponent = isLeftToRight ? LeftToRightLine : RightToLeftLine;

      if (lineNodes.length > 0) {
        elements.push(
          <LineComponent
            key={`line-${index}`}
            nodes={lineNodes}
          ></LineComponent>
        );

        // Determine if vertical arrow is needed
        if (index + 3 < nodes.length) {
          const position = isLeftToRight ? 1000 : 180;
          elements.push(
            <VerticalArrow
              key={`arrow-${index}`}
              left={position}
              bottom={containerHeight - 50 - (lineNumber * lineHeight + gap)}
              isLeftToRight={isLeftToRight}
            />
          );
        }

        index += lineNodes.length;
        isLeftToRight = !isLeftToRight;
        lineNumber += 1;
      }
    }
    return elements;
  };

  return (
    <div ref={containerRef} className={styles.roadmap}>
      {renderNodesInLines()}
    </div>
  );
};

export default Roadmap;
