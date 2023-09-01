import React from 'react';
import styles from './Services.module.css';
import Features from '../../components/Features/Features';

const Services: React.FC = () => {
  return (
    <>
      <section className={styles.services}>
        <div className={styles.services__container}>
          <div className={styles.services__header}>
            <h1 className={styles.services__title}>Services</h1>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
};

export default Services;
