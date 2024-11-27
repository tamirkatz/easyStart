import { featureList } from "../config";
import styles from "./platformCard.module.scss";
import checkMark from '../check_mark.png'; // Replace with the actual path to a check mark image
import crossMark from '../cross_mark.png'; // Replace with the actual path to a cross mark image


export const PlatformCard = ({ platform, onSelect }) => (
    <div className={styles.card}>
      <img src={platform.logo} alt={`${platform.name} Logo`} className={styles.logo} />
      <h3>{platform.name}</h3>
      <div className={styles.featuresList}>
        {featureList.map((feature) => (
          <div key={feature} className={styles.feature}>
            <span>{feature}</span>
            <img
              src={platform.features[feature] ? checkMark : crossMark}
              alt={platform.features[feature] ? 'Yes' : 'No'}
              className={styles.icon}
            />
          </div>
        ))}
      </div>
      <p className={styles.cost}>{platform.cost}</p>
      <button className={styles.selectButton} onClick={() => onSelect(platform.signupLink)}>
        Select
      </button>
    </div>
  );
export default PlatformCard;
