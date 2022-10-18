import styles from './Inspiration.module.css';
import CompanyProfiles from './Companies/CompanyProfiles';
import CompanyForm from './Companies/CompanyForm';

const Inspiration = () => {
  return (
    <section id="inspiration" className={styles['inspiration-section']}>
      <header className={styles['inspiration-header-container']}>
        <h1>Inspo</h1>
        <h2>Get inspired by companies that are coding for a better world.</h2>
      </header>
      <CompanyProfiles />
      <CompanyForm />
    </section>
  );
};

export default Inspiration;
