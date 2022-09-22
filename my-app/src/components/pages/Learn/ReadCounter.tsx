import React, { useState } from 'react';
import Learners from './Learners';
import styles from './ReadCounter.module.css';

function ReadCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Learners count={count} />
      <button className={styles['resource-btn']} onClick={() => setCount(count + 1)}>
        Click if you find it useful too 🤓
      </button>
    </div>
  );
}

export default ReadCounter;
