import React from 'react';
import styles from './Features.module.css';
import FeaturesCard from './FeaturesCard';
import { ReactComponent as ServicesIcon } from '../../assets/services-icon.svg';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.features__container}>
        <div className={styles.features__header}>
          <div className={styles.features__left}>
            <ServicesIcon className=" h-20 w-20 mb-10" />
            <h2>
              High-impact services to take your business to the next level
            </h2>
          </div>
          <Link className={styles.features__btn} to="servies">
            <p>Our services</p>
            <ArrowLeft />
          </Link>
        </div>
        <div className={styles.features__cards}>
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
        </div>
      </div>
    </section>
  );
};

export default Features;
