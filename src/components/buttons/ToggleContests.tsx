import { useState } from 'react';
import Contests from '../Contests/Contests';

import styles from './ToggleContests.module.css';

const ToggleContests = () => {
  const [contests, setContests] = useState(false);

  return (
    <div className={styles['contests-wrapper']}>
      <button
        className={styles['contests-btn']}
        onClick={() => setContests(!contests)}
        style={{
          backgroundColor: contests ? 'var(--black)' : '',
          color: contests ? 'white' : '',
          border: contests ? '1px solid var(--white)' : '',
          borderBottom: contests ? '4px solid var(--highlight-pink)' : '',
          boxShadow: contests ? 'var(--highlight-pink) 2px 1px 5px' : '',
        }}
      >
        Contests {contests ? '' : ''}
      </button>
      {contests && (
        <div>
          <Contests />
        </div>
      )}
    </div>
  );
};
export default ToggleContests;
