import styles from './Companies.module.css';
import * as data from './companies.json';
import webIcon from './www-icon.svg';
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
            <div className={styles['company-header']}>
              <a
                className={styles['company-name']}
                href={company.href}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className={styles['company-name']}>{company.name}</h3>
              </a>
              <p className={styles['company-country']}>{company.country}</p>
            </div>
            <div className={styles['company-details']}>
              <p className={styles['company-topic']}>{company.topic}</p>
            </div>
            <div className={styles['img-container']}>
              <img className={styles['company-img']} src={company.img} alt=""></img>
              <p className={styles['company-description']}>{company.description}</p>
            </div>
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
