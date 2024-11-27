// CreateHiringPlatformAccount.js
import React from "react";
import styles from "./platformCreation.module.scss";
import { platformData } from "../config";
import PlatformCard from "./platformCard";

const CreateHiringPlatformAccount = () => {
  const handleSelectPlatform = (signupLink) => {
    window.open(signupLink, "_blank");
  };

  return (
    <div className={styles.platformsContainer}>
      <h1>Select a Hiring Platform</h1>
      <div className={styles.platformsGrid}>
        {platformData.map((platform) => (
          <PlatformCard
            key={platform.name}
            platform={platform}
            onSelect={handleSelectPlatform}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateHiringPlatformAccount;
