import React, { useState } from 'react';
import styles from './Learn.module.css';

function ReadCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className={styles['read-counter-text']}>
        <strong>{count} </strong>learners have found this article useful.
      </p>
      <button className={styles['resource-btn']} onClick={() => setCount(count + 1)}>
        Click if you find it useful too 🤓
      </button>
    </div>
  );
}

export default ReadCounter;
