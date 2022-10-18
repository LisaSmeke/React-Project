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
          border: videos ? '1px solid var(--white)' : '',
          borderBottom: videos ? '4px solid var(--css-blue)' : '',
          boxShadow: videos ? 'var(--css-blue) 2px 1px 5px' : '',
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
          borderBottom: docs ? '4px solid var(--css-blue)' : '',
          boxShadow: docs ? 'var(--css-blue) 2px 1px 5px' : '',
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
          borderBottom: practice ? '4px solid var(--css-blue)' : '',
          boxShadow: practice ? 'var(--css-blue) 2px 1px 5px' : '',
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
