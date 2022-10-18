import React, { useState } from 'react';
import styles from './CompanyProfiles.module.css';
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
  const [topic, setTopic] = useState('');

  const handleSetTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTopic(value);
  };
  console.log(topic);

  return (
    <section className={styles['companies']}>
      <p className={styles['filter-by']}>Filter by topic:</p>
      <select className={styles['select-topic']} onChange={handleSetTopic}>
        <option value="">Select topic:</option>
        <option value="Biodiversity">Biodiversity</option>
        <option value="Circular economy">Circular Economy</option>
        <option value="Environmental management">Environmental Management</option>
        <option value="Health">Health</option>
        <option value="Waste">Waste</option>
        <option value="Transportation">Transportation</option>
        <option value="Social impact">Social impact</option>
        <option value="Sustainable consumption">Sustainable consumption</option>
        <option value="Sustainable production">Sustainable production</option>
      </select>
      <div className={styles['company-cards-wrapper']}>
        {companies
          .filter(topic === '' ? () => true : (company) => company.topic === topic)
          .map((company) => {
            return (
              <div className={styles['company-card']} key={company.id}>
                <a
                  className={styles['company-name']}
                  href={company.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles['company-header']}>
                    <h3 className={styles['company-name']}>{company.name}</h3>
                    <p className={styles['company-country']}>{company.country}</p>
                  </div>
                  <div className={styles['company-details']}>
                    <p className={styles['company-topic']}>{company.topic}</p>
                  </div>
                  <div className={styles['img-container']}>
                    <img className={styles['company-img']} src={company.img} alt=""></img>
                    <p className={styles['company-description']}>{company.description}</p>
                  </div>
                </a>
              </div>
            );
          })}
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
