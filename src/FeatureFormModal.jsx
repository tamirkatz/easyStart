import React, { useState } from 'react';
import styles from './FeatureFormModal.module.scss';

const FeatureFormModal = ({ feature, onSubmit, onClose }) => {
  const [name, setName] = useState(feature ? feature.name : '');
  const [impact, setImpact] = useState(feature ? feature.impact : 'High');
  const [effort, setEffort] = useState(feature ? feature.effort : 'Low');

  const handleSubmit = () => {
    const newFeature = { id: feature ? feature.id : Date.now(), name, impact, effort };
    onSubmit(newFeature);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{feature ? 'Edit Feature' : 'Add Feature'}</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Impact:
          <select value={impact} onChange={(e) => setImpact(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Effort:
          <select value={effort} onChange={(e) => setEffort(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <button onClick={handleSubmit}>{feature ? 'Save' : 'Add'}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default FeatureFormModal;
