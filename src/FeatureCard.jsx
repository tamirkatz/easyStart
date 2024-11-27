import React, { useState } from 'react';
import FeatureFormModal from './FeatureFormModal';
import styles from './FeatureCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ feature, onEdit, style }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);

  return (
    <div className={styles.featureCard} style={style}>
      <h3>{feature.name}</h3>
      <p>Impact: {feature.impact}</p>
      <p>Effort: {feature.effort}</p>
      <button className={styles.editButton} onClick={() => setEditModalVisible(true)}>
        <FontAwesomeIcon icon={faPen} />
      </button>
      {editModalVisible && (
        <FeatureFormModal
          feature={feature}
          onSubmit={onEdit}
          onClose={() => setEditModalVisible(false)}
        />
      )}
    </div>
  );
};

export default FeatureCard;
