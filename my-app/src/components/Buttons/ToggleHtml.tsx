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
          border: videos ? '1px solid var(--white)' : '',
          borderBottom: videos ? '4px solid var(--html-orange)' : '',
          boxShadow: videos ? 'var(--html-orange) 2px 1px 5px' : '',
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
          borderBottom: docs ? '4px solid var(--html-orange)' : '',
          boxShadow: docs ? 'var(--html-orange) 2px 1px 5px' : '',
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
          borderBottom: practice ? '4px solid var(--html-orange)' : '',
          boxShadow: practice ? 'var(--html-orange) 2px 1px 5px' : '',
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
