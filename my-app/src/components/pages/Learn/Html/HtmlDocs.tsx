import ReadCounter from '../ReadCounter';
import { DocsContentProps } from '../LearnTypes';

import styles from '../LearnResources.module.css';

import * as data from '../Html/html.json';
const htmlDataString = JSON.stringify(data);
const htmlData = JSON.parse(htmlDataString);

const HtmlDocs = (props: DocsContentProps) => {
  const { docs } = props.content;

  return (
    <section className={styles['resources']}>
      <h1 className={styles['html-h1']}>Html Documentation</h1>
      <div className={styles['resource-cards-wrapper']}>
        {docs.map((doc) => (
          <div className={styles['html-resource-card']} key={doc.id}>
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

const LearnHtmlDocs = () => {
  return (
    <div>
      <HtmlDocs content={htmlData} />
    </div>
  );
};

export default LearnHtmlDocs;
