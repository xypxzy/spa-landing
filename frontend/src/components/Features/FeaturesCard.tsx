import React from "react";
import styles from "./Features.module.css";
import icon from "../../assets/Icon-1.svg";

const FeaturesCard: React.FC = () => {
  return (
    <div className={styles.features__card}>
      <div className={styles.features__card__img}>
        <img src={icon} alt="features icon" />
      </div>
      <h3 className={styles.features__card__title}>Social Media Marketing</h3>
      <p className={styles.features__card__desc}>
        Plan it, create it, launch it. Collaborate seamlessly with all the
      </p>
    </div>
  );
};

export default FeaturesCard;
