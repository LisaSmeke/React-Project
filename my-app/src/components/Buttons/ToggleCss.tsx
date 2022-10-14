import { useState } from 'react';

import LearnCssVideos from '../pages/Learn/Css/CssVideos';
import LearnCssDocs from '../pages/Learn/Css/CssDocs';
import LearnCssPractice from '../pages/Learn/Css/CssPractice';

import styles from './ToggleResources.module.css';

const ToggleCss = () => {
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
          <LearnCssVideos />
        </div>
      )}
      {docs && (
        <div>
          <LearnCssDocs />
        </div>
      )}
      {practice && (
        <div>
          <LearnCssPractice />
        </div>
      )}
    </div>
  );
};

export default ToggleCss;
