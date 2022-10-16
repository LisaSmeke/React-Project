import { PracticeContentProps } from '../LearnTypes';
import ReadCounter from '../../../buttons/ReadCounter';

import styles from '../LearnResources.module.css';

import * as data from './css.json';
const cssDataString = JSON.stringify(data);
const cssData = JSON.parse(cssDataString);

const CssPractice = (props: PracticeContentProps) => {
  const { practice } = props.content;

  return (
    <section className={styles['resources']}>
      <h1 className={styles['css-h1']}>CSS Practice Exercises</h1>
      <div className={styles['resource-cards-wrapper']}>
        {practice.map((practice) => (
          <div className={styles['css-resource-card']} key={practice.id}>
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
              <ReadCounter></ReadCounter>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LearnCssPractice = () => {
  return (
    <div>
      <CssPractice content={cssData} />
    </div>
  );
};

export default LearnCssPractice;
