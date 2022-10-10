import styles from './Contact.module.css';
import contactKeys from './contact-keyboard.svg';

const Contact = () => {
  return (
    <section id="contact" className={styles['contact-section']}>
      <header className={styles['contact-header-container']}>
        <img className={styles['contact-title']} src={contactKeys} alt="Contact"></img>
      </header>

      <div className={styles['contact-body']}>
        <div className={styles['contact-text']}>
          <h2>Questions, comments, suggestions?</h2>
          <p>I'd love to hear from you!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
