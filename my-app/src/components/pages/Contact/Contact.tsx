import styles from './Contact.module.css';
import contactKeys from './contact-keyboard.svg';

const Contact = () => {
  return (
    <section id="contact" className={styles['contact-section']}>
      <header className={styles['contact-header-container']}>
        <img className={styles['contact-title']} src={contactKeys} alt="Contact"></img>
      </header>

      <div className={styles['contact-body']}>
        <div className={styles['contact-form']}>
          <div className={styles['contact-form-left']}>
            <h2>Questions, comments, suggestions?</h2>
          </div>
          <div className={styles['contact-form-right']}>
            <h2>I'd love to hear from you!</h2>
            <p>Use the form below to get in touch.</p>
            <form
              className={styles['input-fields']}
              action="https://formsubmit.co/7794b8369d86d7a65fb13a6da01d3620"
              method="POST"
            >
              <input type="text" name="Name" placeholder="Name" required></input>
              <input type="email" name="Email" placeholder="Email" required></input>
              <input type="text" name="Subject" placeholder="Subject" required></input>
              <textarea name="Message" placeholder="Message" required></textarea>
              <button className={styles['send-btn']} type="submit">
                Send
              </button>
              <input type="hidden" name="_subject" value="Impact Coding - New submission!"></input>
              {/* <input type="hidden" name="_next" value="https://localhost:3000/about"></input> */}
              <input type="hidden" name="_template" value="table"></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
