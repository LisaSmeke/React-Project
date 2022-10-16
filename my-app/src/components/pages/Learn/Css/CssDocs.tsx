import { DocsContentProps } from '../LearnTypes';
import ReadCounter from '../../../buttons/ReadCounter';

import styles from '../LearnResources.module.css';

import * as data from './css.json';
const cssDataString = JSON.stringify(data);
const cssData = JSON.parse(cssDataString);

const CssDocs = (props: DocsContentProps) => {
  const { docs } = props.content;

  return (
    <section className={styles['resources']}>
      <h1 className={styles['css-h1']}>CSS Documentation</h1>
      <div className={styles['resource-cards-wrapper']}>
        {docs.map((doc) => (
          <div className={styles['css-resource-card']} key={doc.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{doc.title}</h3>
            </div>
            <div className={styles['resource-details']}>
              <p>{doc.by}</p>
            </div>
            <div className={styles['resource-content']}>
              <a href={doc.href} target="_blank" rel="noreferrer">
                <p className={styles['resource-description']}>{doc.description}</p>
              </a>
              <ReadCounter />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnCssDocs = () => {
  return (
    <div>
      <CssDocs content={cssData} />
    </div>
  );
};

export default LearnCssDocs;
