import styles from './Inspo.module.css';
import inspoKeys from './inspo-keyboard.svg';
import CompanyProfiles from './Companies/Companies';
import CompanyForm from './Companies/CompanyForm';

const Inspo = () => {
  return (
    <section id="inspo" className={styles['inspo-section']}>
      <header className={styles['inspo-header-container']}>
        <img className={styles['inspo-title']} src={inspoKeys} alt="Inspiration"></img>
      </header>

      <div className={styles['inspo-text']}>
        <h2>Get inspired by companies that are coding for a better world.</h2>
      </div>
      <CompanyProfiles />
      <CompanyForm />
    </section>
  );
};

export default Inspo;
