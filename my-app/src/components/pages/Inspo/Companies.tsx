import styles from './Companies.module.css';
import * as data from './companies.json';
const companyDataString = JSON.stringify(data);
const companyData = JSON.parse(companyDataString);

interface CompanyProps {
  content: {
    companies: {
      id: string;
      name: string;
      topic: string;
      country: string;
      description: string;
      img: string;
      href: string;
    }[];
  };
}

const Companies = (props: CompanyProps) => {
  const { companies } = props.content;

  return (
    <section className={styles['companies']}>
      <div className={styles['company-cards-wrapper']}>
        {companies.map((company) => (
          <div className={styles['company-card']} key={company.id}>
            <h3 className={styles['company-name']}>{company.name}</h3>
            <p className={styles['company-topic']}>{company.topic}</p>
            <img className={styles['company-img']} src={company.img} alt=""></img>
            <p className={styles['company-description']}>{company.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const CompanyProfiles = () => {
  return (
    <div>
      <Companies content={companyData} />
    </div>
  );
};

export default CompanyProfiles;
