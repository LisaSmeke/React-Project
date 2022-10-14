import { PracticeContentProps } from '../LearnTypes';
import ReadCounter from '../ReadCounter';

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
              <p className={styles['resource-by']}>{practice.by}</p>
            </div>
            <div className={styles['resource-details']}>
              <p className={styles['resource-level']}>{practice.level}</p>
            </div>
            <div className={styles['img-container']}>
              <a href={practice.href} target="_blank" rel="noreferrer">
                <img className={styles['resource-img']} src={practice.img} alt=""></img>
                <p className={styles['resource-description']}>{practice.description}</p>
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

const LearnCssPractice = () => {
  return (
    <div>
      <CssPractice content={cssData} />
    </div>
  );
};

export default LearnCssPractice;
