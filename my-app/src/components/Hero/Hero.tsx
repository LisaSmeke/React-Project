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
        <h1>CODE WITH IMPACT</h1>
        <h2>Let's leverage tech for a better world.</h2>
        <button className={styles['hero-btn']}>Start coding</button>
      </div>
    </div>
  );
};
export default HeroSection;
