import ReadCounter from '../../../buttons/ReadCounter';
import { PracticeContentProps } from '../LearnTypes';
import styles from '../LearnResources.module.css';

import * as data from './js.json';
const jsDataString = JSON.stringify(data);
const jsData = JSON.parse(jsDataString);

const JsPractice = (props: PracticeContentProps) => {
  const { practice } = props.content;

  return (
    <section className={styles['resources']}>
      <h1 className={styles['js-h1']}>Js Practice Exercises</h1>
      <div className={styles['resource-cards-wrapper']}>
        {practice.map((practice) => (
          <div className={styles['js-resource-card']} key={practice.id}>
            <div className={styles['resource-header']}>
              <h3 className={styles['resource-name']}>{practice.title}</h3>
            </div>
            <div className={styles['resource-details']}>
              <p>{practice.by}</p>
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

const LearnJsPractice = () => {
  return (
    <div>
      <JsPractice content={jsData} />
    </div>
  );
};

export default LearnJsPractice;
