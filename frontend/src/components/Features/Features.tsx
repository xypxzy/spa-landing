import React from "react";
import styles from "./Features.module.css";
import FeaturesCard from "./FeaturesCard";
import servicesIcon from "../../assets/services-icon.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.features__container}>
        <div className={styles.features__header}>
          <div className={styles.features__left}>
            <img src={servicesIcon} alt="services icon" />
            <h2>
              High-impact services to take your business to the next level
            </h2>
          </div>
          <Link className={styles.features__btn} to="servies">
            <p>Our services</p>
            <img src={arrowLeft} alt="arrow-left icon" />
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
