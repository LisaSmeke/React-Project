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
          border: videos ? '1px solid var(--white)' : '',
          borderBottom: videos ? '4px solid var(--js-yellow)' : '',
          boxShadow: videos ? 'var(--js-yellow) 2px 1px 5px' : '',
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
          borderBottom: docs ? '4px solid var(--js-yellow)' : '',
          boxShadow: docs ? 'var(--js-yellow) 2px 1px 5px' : '',
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
          borderBottom: practice ? '4px solid var(--js-yellow)' : '',
          boxShadow: practice ? 'var(--js-yellow) 2px 1px 5px' : '',
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
