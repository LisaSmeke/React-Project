import { Link } from 'react-router-dom';
import styles from './LearnIcons.module.css';

const LearnIcons = () => {
  return (
    <section className={styles['custom-learn-section']}>
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

export default LearnIcons;
