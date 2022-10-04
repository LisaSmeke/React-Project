import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import tech from './tech.webp';
import screen from './screen.webp';
import laptop from './laptop.webp';

const HeroSection = () => {
  return (
    <div className={styles['hero-container']}>
      <img className={styles['hero-bg-img']} src={laptop} alt=""></img>
      <div className={styles['hero-text']}>
        <h1>CODE WITH IMPACT</h1>
        <h2>Let's leverage tech for a better world.</h2>
        <Link to="learn">
          <button className={styles['hero-btn']}>Get started!</button>
        </Link>
      </div>
    </div>
  );
};
export default HeroSection;
