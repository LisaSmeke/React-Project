import React, { useState } from 'react';
import styles from './ReadCounter.module.css';

type LearnerProps = {
  count: number;
};

export const Learners = ({ count }: LearnerProps) => {
  return (
    <p className={styles['counter-text']}>
      <strong>{count}</strong> learners found this resource useful
    </p>
  );
};

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
