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
