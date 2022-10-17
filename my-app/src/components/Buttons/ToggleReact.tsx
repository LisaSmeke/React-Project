import { useState } from 'react';

import LearnReactVideos from '../pages/Learn/React/ReactVideos';
import LearnReactDocs from '../pages/Learn/React/ReactDocs';
import LearnReactPractice from '../pages/Learn/React/ReactPractice';

import styles from './ToggleResources.module.css';

const ToggleReact = () => {
  const [videos, setVideos] = useState(false);
  const [docs, setDocs] = useState(false);
  const [practice, setPractice] = useState(false);

  return (
    <div className={styles['toggle-resource-btns-wrapper']}>
      <button
        className={styles['toggle-resource-btn']}
        onClick={() => setVideos(!videos)}
        style={{
          backgroundColor: videos ? 'var(--black)' : '',
          color: videos ? 'white' : '',
          border: videos ? '1px solid var(--white)' : '',
          borderBottom: videos ? '4px solid var(--react-blue)' : '',
          boxShadow: videos ? 'var(--react-blue) 2px 1px 5px' : '',
        }}
      >
        Videos {videos ? '' : ''}
      </button>
      <button
        className={styles['toggle-resource-btn']}
        onClick={() => setDocs(!docs)}
        style={{
          backgroundColor: docs ? 'var(--black)' : '',
          color: docs ? 'white' : '',
          border: docs ? '1px solid var(--white)' : '',
          borderBottom: docs ? '4px solid var(--react-blue)' : '',
          boxShadow: docs ? 'var(--react-blue) 2px 1px 5px' : '',
        }}
      >
        Documentation {docs ? '' : ''}
      </button>
      <button
        className={styles['toggle-resource-btn']}
        onClick={() => setPractice(!practice)}
        style={{
          backgroundColor: practice ? 'var(--black)' : '',
          color: practice ? 'white' : '',
          border: practice ? '1px solid var(--white)' : '',
          borderBottom: practice ? '4px solid var(--react-blue)' : '',
          boxShadow: practice ? 'var(--react-blue) 2px 1px 5px' : '',
        }}
      >
        Practice {practice ? '' : ''}
      </button>
      {videos && (
        <div>
          <LearnReactVideos />
        </div>
      )}
      {docs && (
        <div>
          <LearnReactDocs />
        </div>
      )}
      {practice && (
        <div>
          <LearnReactPractice />
        </div>
      )}
    </div>
  );
};

export default ToggleReact;
