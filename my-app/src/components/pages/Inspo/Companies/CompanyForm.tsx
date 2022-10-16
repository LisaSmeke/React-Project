import React, { useState } from 'react';
import styles from './CompanyForm.module.css';

const CompanyForm = () => {
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState('');
  const [website, setWebsite] = useState('');

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for suggesting ${company}. 👍
We'll make sure to check it out soon! 🧐`);
  };
  return (
    <div>
      <p>Do you know a company that is coding for good?</p>
      <p>Fill out this form so that we can feature it at Impact Coding!</p>

      <form className={styles['company-form']} onSubmit={submitForm}>
        <label className={styles['company-form-label']}>
          Company name:
          <input
            className={styles['company-form-input']}
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            name="company"
            type="text"
            placeholder="Company's name is..."
          />
        </label>
        <label className={styles['company-form-label']}>
          Topic they're addressing:
          <input
            className={styles['company-form-input']}
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            name="topic"
            type="text"
            placeholder="e.g. food waste, biodiversity, etc."
          />
        </label>
        <label className={styles['company-form-label']}>
          Website:
          <input
            className={styles['company-form-input']}
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            name="website"
            type="url"
            placeholder="url"
          />
        </label>
        <button className={styles['company-form-btn']} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
