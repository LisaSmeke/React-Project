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
      logo: string;
      href: string;
    }[];
  };
}

const Companies = (props: CompanyProps) => {
  const { companies } = props.content;

  return (
    <section className={styles['companies']}>
      <div className={styles['companies-intro']}>
        <h1>Companies using tech for good</h1>
        <h2>Get inspired with their work</h2>
      </div>
      <div className={styles['company-card']}>
        {companies.map((company) => (
          <div className={styles['resource-details']} key={company.id}>
            <h3 className={styles['resource-title']}>{company.name}</h3>
            <p className={styles['resource-by']}>{company.country}</p>
            <p className={styles['resource-description']}>{company.description}</p>
            <p className={styles['resource-categories']}>{company.topic}</p>
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
