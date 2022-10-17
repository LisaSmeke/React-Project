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
        alert("Thank you, we've received your suggestion!");
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
    <div>
      <form method="post" ref={formRef} onSubmit={handleSubmit} name="google-sheet">
        <div className={styles['company-form']}>
          <input
            className={styles['company-form-input']}
            type="text"
            name="name"
            placeholder="Company name *"
          />
        </div>
        <div>
          <input
            className={styles['company-form-input']}
            type="text"
            name="topic"
            placeholder="Topic *"
          />
        </div>
        <div>
          <input
            className={styles['company-form-input']}
            type="url"
            name="website"
            placeholder="Website *"
          />
        </div>
        <div>
          <input
            className={styles['company-form-btn']}
            type="submit"
            name="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};
export default CompanyForm;
