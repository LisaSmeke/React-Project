import React, { useState, useRef } from 'react';
import styles from './CompanyForm.module.css';

const CompanyForm = () => {
  const formRef = useRef<null | any>(null);
  const [data, setData] = useState(false);
  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbwOUUCi2WTisGFq9NYEz_TGDP_5Jl0euWlXCS5qdsQfkXNCjJ8LCsvjmWCik1i4s_Fxnw/exec';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(true);

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log('Successfully submitted');
        alert("Thank you, we've received your suggestion!⭐");
        setData(false);
      })
      .catch((err) => console.log(err));
  };

  if (data) {
    return (
      <div>
        <p>Sending data...</p>
      </div>
    );
  }

  return (
    <section className={styles['suggest-company']}>
      <h2>Do you know a company using tech for a better world?</h2>
      <p>Fill out the form below for it to be featured in our website!</p>
      <form
        className={styles['company-form']}
        method="post"
        ref={formRef}
        onSubmit={handleSubmit}
        name="google-sheet"
      >
        <label className={styles['company-form-label']}>Company:</label>
        <input
          className={styles['company-form-input']}
          type="text"
          name="name"
          placeholder="Company name"
          required
        />
        <label className={styles['company-form-label']}>Working on:</label>
        <input
          className={styles['company-form-input']}
          type="text"
          name="topic"
          placeholder="Topic (e.g. health, waste, etc.)"
          required
        />
        <label className={styles['company-form-label']}>Website:</label>
        <input
          className={styles['company-form-input']}
          type="text"
          name="website"
          placeholder="Url"
          required
        />
        <input
          className={styles['company-form-submit']}
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </section>
  );
};
export default CompanyForm;
