import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles['about-section']}>
      <h1>About</h1>
      <h2>Who I am</h2>
      <p>Hey there! I'm Lisa</p>
      <p>
        👩🏻‍💻 Software Developer specialized in front-end technologies, with a background in
        Sustainability.
      </p>
      <p>
        🌎 I seek to harness the power of tech as a driver of the common good by creating impactful
        apps.
      </p>
      <p>🤓 I'm a never-ending knowledge seeker who also loves to teach.</p>
      <p>
        💚 I value work that is aligned with values such as: equality, justice, culture,
        sustainability, and health.
      </p>
      <h2>Why I created Impact Coding</h2>
      <h2>What you can expect</h2>
      <h2>Where to find more</h2>
    </section>
  );
};

export default About;
