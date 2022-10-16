import ReadCounter from '../ReadCounter';
import { DocsContentProps } from '../LearnTypes';

import styles from '../LearnResources.module.css';

import * as data from './react.json';
const reactDataString = JSON.stringify(data);
const reactData = JSON.parse(reactDataString);

const ReactDocs = (props: DocsContentProps) => {
  const { docs } = props.content;

  return (
    <section className={styles['resources']}>
      <h1 className={styles['react-h1']}>React Documentation</h1>
      <div className={styles['resource-cards-wrapper']}>
        {docs.map((doc) => (
          <div className={styles['react-resource-card']} key={doc.id}>
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

const LearnReactDocs = () => {
  return (
    <div>
      <ReactDocs content={reactData} />
    </div>
  );
};

export default LearnReactDocs;
