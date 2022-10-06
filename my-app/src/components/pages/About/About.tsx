import styles from './About.module.css';
import profile from './lisa.webp';
import aboutKeys from './about-keyboard.svg';

const About = () => {
  return (
    <section className={styles['about-section']}>
      <header className={styles['about-header-container']}>
        <img className={styles['about-title']} src={aboutKeys} alt="About"></img>
      </header>

      <div className={styles['about-body']}>
        <div className={styles['hi-text']}>
          <h2>Hi there! 👋</h2>
          <h3>
            My name is <span className={styles.name}>Lisa</span>
          </h3>
        </div>
        <img className={styles.profile} src={profile} alt="Lisa smiling"></img>

        <div className={styles['first-intro-text']}>
          <p>
            👩🏻‍💻 I'm a Software Developer specialized in front-end technologies, with a background in
            Sustainability.
          </p>
          <p>
            🌎 I seek to harness the power of tech as a driver of the common good by creating
            impactful apps.
          </p>
          <p>🤓 As a never-ending knowledge seeker, I also love to teach what I know.</p>
          <p>
            💚 I appreciate work that is aligned with values such as: equality, justice, culture,
            sustainability, and health.
          </p>
        </div>

        <h2 className={styles.question}>Why did I create Impact Coding?</h2>
        <div className={styles['intro-text']}>
          <p>
            💥 Technology is not the "one and only" solution to our global sustainability
            challenges, but it can act as a major accelerator to achieve positive change.
          </p>
          <p>🫶 I want to encourage and inspire others to be part of that change.</p>
        </div>

        <h2 className={styles.question}>What can you expect?</h2>
        <div className={styles['intro-text']}>
          <p>💻 Awesome resources to learn Software Development.</p>
          <p>ℹ️ Information about companies leveraging tech to build a better world.</p>
          <p>🚀Interesting conversation about tech, innovation, and sustainability.</p>
        </div>

        <h2 className={styles.question}>Where to find more</h2>
        <div className={styles['intro-text']}>
          <p>
            💬 Make sure to connect with me on{' '}
            <a href="https://www.linkedin.com/in/lisasmeke/" target="_blank" rel="noreferrer">
              LikedIn
            </a>{' '}
            and{' '}
            <a href="https://www.instagram.com/lisasmeke/" target="_blank" rel="noreferrer">
              Instagram
            </a>{' '}
            to stay updated and share our thoughts.
          </p>
          <p>💕 I'd love to hear from you!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
