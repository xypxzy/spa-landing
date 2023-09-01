import React from 'react';
import styles from './Services.module.css';
import Features from '../../components/Features/Features';
import serviceImg from '../../assets/serviceImg.png';
import marketingLogo from '../../assets/marketing-logo.png';
import { ReactComponent as DoneIcon } from '../../assets/marketing-icon.svg';

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
      <section className={styles.marketing}>
        <div className={styles.marketing__container}>
          <div className={styles.marketing__content}>
            <img src={serviceImg} alt="PC" className={styles.marketing__img} />
            <div className={styles.marketing__right}>
              <div className={styles.marketing__top}>
                <img src={marketingLogo} alt="marketing logo" />
                <h3 className={styles.marketing__title}>
                  We take your business reach from thousands to millions
                </h3>
              </div>
              <hr className={styles.hr} />
              <div className={styles.marketing__middle}>
                <p className={styles.marketing__desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  sollicitudinbibendum senectus scelerisque non. Turpis matis
                  morbi vivera ipsum adipiscing Mauris volutpat sagittis, sit
                </p>
                <ul className={styles.marketing__list}>
                  <li className={styles.marketing__item}>
                    <span>
                      <DoneIcon />
                    </span>
                    Dolor duis lorem enim eu turpis potenti nulla semper
                  </li>
                  <li className={styles.marketing__item}>
                    <span>
                      <DoneIcon />
                    </span>
                    Dolor duis lorem enim eu turpis potenti nulla semper
                  </li>
                  <li className={styles.marketing__item}>
                    <span>
                      <DoneIcon />
                    </span>
                    Dolor duis lorem enim eu turpis potenti nulla semper
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
