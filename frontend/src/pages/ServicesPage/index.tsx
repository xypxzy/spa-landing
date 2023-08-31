import React from "react";
import styles from "./Services.module.css";
import Features from "../../components/Features/Features";
import getInTouch from "../../assets/get-in-touch.svg";

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
      <div className={styles.getInTouch}>
        <img src={getInTouch} alt="Snow" />
        <div className={styles.getInTouch__content}>
          <h3>
            Get in touch and <span>start</span> <span>growing</span> your
            startup today
          </h3>
          <div className="flex">
            <button className={styles.getInTouch__btn1}>Get in touch</button>
            <button className={styles.getInTouch__btn2}>Get Started</button>
          </div>
        </div>
        {/* <div className={styles.centered}>Centered</div> */}
      </div>
    </>
  );
};

export default Services;
