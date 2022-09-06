import React from 'react';
import styles from './About.module.css';
import profile from './lisa-profile.jpeg';

const About = () => {
  return (
    <section className={styles['about-section']}>
      <h1>About</h1>
      <p>Hey there! 👋</p>
      <p>
        My name is <span className={styles.name}>Lisa</span>
      </p>
      <img className={styles.profile} src={profile} alt="Lisa smiling"></img>

      <h2 className={styles.question}>Who am I?</h2>
      <div className={styles['intro-text']}>
        <p>
          👩🏻‍💻 Software Developer specialized in front-end technologies, with a background in
          Sustainability.
        </p>
        <p>
          🌎 I seek to harness the power of tech as a driver of the common good by creating
          impactful apps.
        </p>
        <p>🤓 I'm a never-ending knowledge seeker who also loves to teach.</p>
        <p>
          💚 I value work that is aligned with values such as: equality, justice, culture,
          sustainability, and health.
        </p>
      </div>

      <h2 className={styles.question}>Why did I create Impact Coding?</h2>
      <div className={styles['intro-text']}>
        <p>
          💥 Tech and sustainability are two of the fastest growing fields, and I want to inspire
          others to be part of the change.
        </p>
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
          💬 Be sure to connect with me on LinkedIn and IG to stay updated and share our thoughts.
          I'd love to hear from you!
        </p>
      </div>
    </section>
  );
};

export default About;
