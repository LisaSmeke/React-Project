import styles from './Inspo.module.css';
import CompanyProfiles from './Companies/CompanyProfiles';
import CompanyForm from './Companies/CompanyForm';

const Inspo = () => {
  return (
    <section id="inspo" className={styles['inspo-section']}>
      <header className={styles['inspo-header-container']}>
        <h1>Inspiration</h1>
        <h2>Get inspired by companies that are coding for a better world.</h2>
      </header>
      <CompanyProfiles />
      <CompanyForm />
    </section>
  );
};

export default Inspo;
