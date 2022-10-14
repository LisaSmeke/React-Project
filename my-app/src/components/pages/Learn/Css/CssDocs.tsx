import { DocsContentProps } from '../LearnTypes';
import ReadCounter from '../ReadCounter';

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
              <p className={styles['resource-by']}>{doc.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{doc.level}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={doc.href} target="_blank" rel="noreferrer">
                <img className={styles['resource-img']} src={doc.img} alt=""></img>
                <p className={styles['resource-description']}>{doc.description}</p>
              </a>
              <div>
                <ReadCounter></ReadCounter>
              </div>
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
