import { Link } from 'react-router-dom';
import htmlColor from '../../../../icons/html-color.svg';
import cssColor from '../../../../icons/css-color.svg';
import jsColor from '../../../../icons/js-color.svg';
import reactColor from '../../../../icons/react-color.svg';
import styles from './CustomLearn.module.css';

const CustomLearn = () => {
  return (
    <section className={styles['custom-learn-section']}>
      <h2 className={styles['custom-learn-intro']}>
        Select a topic and start learning with our curated compilation of resources
      </h2>
      <div className={styles['learn-icons']}>
        <Link to="html">
          <div className={styles['html-icon']}></div>
        </Link>
        <div className={styles['css-icon']}></div>
        <div className={styles['js-icon']}></div>
        <div className={styles['react-icon']}></div>
      </div>
    </section>
  );
};

export default CustomLearn;
