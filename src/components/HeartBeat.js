import React from 'react';
import styles from './HeartBeat.module.css';

const HeartBeat = () => {
  return (
    <div id={styles.container}>
      <div id={styles.heart}></div>
    </div>
  );
};

export default HeartBeat;