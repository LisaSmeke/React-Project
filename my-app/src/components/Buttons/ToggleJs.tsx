import { useState } from 'react';

import LearnJsVideos from '../pages/Learn/Js/JsVideos';
import LearnJsDocs from '../pages/Learn/Js/JsDocs';
import LearnJsPractice from '../pages/Learn/Js/JsPractice';

import styles from './ToggleResources.module.css';

const ToggleJs = () => {
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
          <LearnJsVideos />
        </div>
      )}
      {docs && (
        <div>
          <LearnJsDocs />
        </div>
      )}
      {practice && (
        <div>
          <LearnJsPractice />
        </div>
      )}
    </div>
  );
};

export default ToggleJs;
