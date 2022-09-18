import styles from './Hero.module.css';

const HeroSection = () => {
  return (
    <div className={styles['hero-container']}>
      <video
        className={styles['hero-video']}
        src="../Videos/computer-keyboard.mp4"
        autoPlay
        loop
        muted
      />
      <div className={styles['hero-text']}>
        <h1>LEARN TO CODE FOR A BETTER WORLD</h1>
        <h2>Find resources and inspiration to become a Software Developer with impact.</h2>
        <button>Let's code!</button>
      </div>
    </div>
  );
};
export default HeroSection;
