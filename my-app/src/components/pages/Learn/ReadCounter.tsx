import React, { useState } from 'react';
import Learners from './Learners';
import styles from './ReadCounter.module.css';

function ReadCounter() {
  const [count, setCount] = useState(3);

  return (
    <div className={styles['counter-wrapper']}>
      <Learners count={count} />
      <div className={styles['btn-container']}>
        <button className={styles['counter-btn']} onClick={() => setCount(count + 1)}>
          Me too! ✋
        </button>
      </div>
    </div>
  );
}

export default ReadCounter;
