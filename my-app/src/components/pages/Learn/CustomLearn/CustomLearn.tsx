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
      <div>
        <Link to="html">
          <img className={styles['topic-icon']} src={htmlColor} alt="html"></img>
        </Link>
        <img className={styles['topic-icon']} src={cssColor} alt="css"></img>
        <img className={styles['topic-icon']} src={jsColor} alt="js"></img>
        <img className={styles['topic-icon']} src={reactColor} alt="react"></img>
      </div>
    </section>
  );
};

export default CustomLearn;
