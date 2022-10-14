import ReadCounter from '../ReadCounter';
import { PracticeContentProps } from '../LearnTypes';
import styles from '../LearnResources.module.css';

import * as data from '../Html/html.json';
const htmlDataString = JSON.stringify(data);
const htmlData = JSON.parse(htmlDataString);

const HtmlPractice = (props: PracticeContentProps) => {
  const { practice } = props.content;

  return (
    <section className={styles['resources']}>
      <h1 className={styles['html-h1']}>Html Practice Exercises</h1>
      <div className={styles['resource-cards-wrapper']}>
        {practice.map((practice) => (
          <div className={styles['html-resource-card']} key={practice.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{practice.title}</h3>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{practice.by}</p>
            </div>
            <div className={styles['resource-content']}>
              <a href={practice.href} target="_blank" rel="noreferrer">
                <p className={styles['resource-description']}>{practice.description}</p>
              </a>
              <ReadCounter />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnHtmlPractice = () => {
  return (
    <div>
      <HtmlPractice content={htmlData} />
    </div>
  );
};

export default LearnHtmlPractice;
