import { useState } from 'react';

import LearnHtmlVideos from '../pages/Learn/Html/HtmlVideos';
import LearnHtmlDocs from '../pages/Learn/Html/HtmlDocs';
import LearnHtmlPractice from '../pages/Learn/Html/HtmlPractice';

import styles from './ToggleResources.module.css';

const ToggleHtml = () => {
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
          <LearnHtmlVideos />
        </div>
      )}
      {docs && (
        <div>
          <LearnHtmlDocs />
        </div>
      )}
      {practice && (
        <div>
          <LearnHtmlPractice />
        </div>
      )}
    </div>
  );
};

export default ToggleHtml;
