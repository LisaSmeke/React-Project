import { Link } from 'react-router-dom';
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
        <Link to="css">
          <div className={styles['css-icon']}></div>
        </Link>
        <Link to="js">
          <div className={styles['js-icon']}></div>
        </Link>
        <Link to="react">
          <div className={styles['react-icon']}></div>
        </Link>
      </div>
    </section>
  );
};

export default CustomLearn;
