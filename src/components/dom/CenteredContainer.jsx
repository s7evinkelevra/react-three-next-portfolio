import React from 'react';
import styles from './CenteredContainer.module.css'

const CenteredContainer = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.text}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CenteredContainer;