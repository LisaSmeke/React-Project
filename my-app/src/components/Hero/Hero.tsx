import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import laptop from './laptop.webp';

const HeroSection = () => {
  return (
    <div className={styles['hero-container']}>
      <img className={styles['hero-bg-img']} src={laptop} alt=""></img>
      <div className={styles['hero-text']}>
        <h1>CODE WITH IMPACT</h1>
        <h2>Let's leverage tech for a better world.</h2>
        <Link to="about">
          <button className={styles['hero-btn']}>Learn more</button>
        </Link>
      </div>
    </div>
  );
};
export default HeroSection;
