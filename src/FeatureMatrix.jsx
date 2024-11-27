import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import FeatureFormModal from './FeatureFormModal';
import styles from './FeatureMatrix.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FeatureMatrix = () => {
  const [features, setFeatures] = useState([
    { id: 1, name: 'Login System', impact: 'High', effort: 'Medium' },
    { id: 2, name: 'User Dashboard', impact: 'Medium', effort: 'High' },
    // Add more features as needed
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const addFeature = (feature) => {
    setFeatures([...features, { id: features.length + 1, ...feature }]);
    setModalVisible(false);
  };

  const editFeature = (updatedFeature) => {
    const updatedFeatures = features.map(feature => 
      feature.id === updatedFeature.id ? updatedFeature : feature
    );
    setFeatures(updatedFeatures);
    setModalVisible(false);
  };

  const getFeatureGridPosition = (impact, effort) => {
    const impactIndex = impact === 'High' ? 0 : (impact === 'Medium' ? 1 : 2);
    const effortIndex = effort === 'High' ? 0 : (effort === 'Medium' ? 1 : 2);
    return {
      gridRow: impactIndex + 1,
      gridColumn: effortIndex + 1
    };
  };

  return (
    <div className={styles.featureMatrix}>
      <h1>Feature Prioritization Matrix</h1>
      <p>Prioritize features based on their impact and effort to effectively plan your MVP.</p>
      <div className={styles.matrix}>
        <div className={styles.impactAxis}>
          <div>High Impact</div>
          <div>Low Impact</div>
        </div>
        <div className={styles.grid}>
          {features.map(feature => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              style={getFeatureGridPosition(feature.impact, feature.effort)}
              onEdit={editFeature}
            />
          ))}
        </div>
      </div>
        <div className={styles.effortAxis}>
          <div>High Effort</div>
          <div>Low Effort</div>
        </div>
      <button className={styles.addButton} onClick={() => setModalVisible(true)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {modalVisible && <FeatureFormModal onSubmit={addFeature} onClose={() => setModalVisible(false)} />}
    </div>
  );
};

export default FeatureMatrix;
