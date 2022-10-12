import React, { useState } from 'react';
import styles from './NameForm.module.css';

const NameForm = () => {
  const [username, setUsername] = useState('');

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Welcome to Impact Coding, ' + username + '! 👩‍💻👨‍💻');
  };

  return (
    <form className={styles['name-form']} onSubmit={submitForm}>
      <label className={styles['name-form-label']}>
        What is your name?
        <input
          className={styles['name-form-input']}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          name="username"
          type="text"
          placeholder="My name is..."
        />
      </label>
      <button className={styles['name-form-btn']} type="submit">
        Send
      </button>
    </form>
  );
};

export default NameForm;
