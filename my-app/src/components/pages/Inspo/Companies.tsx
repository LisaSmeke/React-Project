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
        <p>Organizations that inspire through their innovations</p>
      </div>
      <div className={styles['company-cards-wrapper']}>
        {companies.map((company) => (
          <div className={styles['company-card']} key={company.id}>
            <h3 className={styles['company-name']}>{company.name}</h3>
            {/* <p className={styles['company-country']}>Country: {company.country}</p> */}
            <p className={styles['company-topic']}>{company.topic}</p>
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
