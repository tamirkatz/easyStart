// MainPage.js
import React from "react";
import Roadmap from "./newRoadMap";
import EventProgressBar from "./EventProgressBar";
import styles from "./MainPage.module.scss";
import { MAIN_PAGE_NODES } from "./config";
import easyStartLogo from "./easystartlogo.png";

const EVENTS = [
  { title: "Pitch deck preparation", progress: 40, estimatedHours: 120 },
  {
    title: "Minimum viable product readiness",
    progress: 85,
    estimatedHours: 60,
  },
  // other events...
];

const MainPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={easyStartLogo} alt="Platform Logo" className={styles.logo} />
      </header>
      <div className={styles.mainContainer}>
        <Roadmap nodes={MAIN_PAGE_NODES} />
        <div className={styles.eventProgressBars}>
          {EVENTS.map((event) => (
            <EventProgressBar
              key={event.title}
              title={event.title}
              progress={event.progress}
              estimatedHours={event.estimatedHours}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
