import React from 'react';
import styles from './Services.module.css';
import Features from '../../components/Features/Features';
import serviceImg from '../../assets/serviceImg.png';
import marketingLogo from '../../assets/marketing-logo.png';
import { ReactComponent as DoneIcon } from '../../assets/marketing-icon.svg';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const featureAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, ease: 'easeInOut' }
    })
  };
  const animateText = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <section className={styles.services}>
        <div className={styles.services__container}>
          <div className={styles.services__header}>
            <h1 className={styles.services__title}>Services</h1>
          </div>
        </div>
      </section>
      <Features />
      <motion.section
        className={styles.marketing}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <div className={styles.marketing__container}>
          <div className={styles.marketing__content}>
            <img src={serviceImg} alt="PC" className={styles.marketing__img} />
            <div className={styles.marketing__right}>
              <div className={styles.marketing__top}>
                <motion.img
                  variants={featureAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  src={marketingLogo}
                  alt="marketing logo"
                />
                <motion.h3
                  custom={1}
                  variants={animateText}
                  className={styles.marketing__title}
                >
                  We take your business reach from thousands to millions
                </motion.h3>
              </div>
              <hr className={styles.hr} />
              <div className={styles.marketing__middle}>
                <motion.p
                  custom={1}
                  variants={animateText}
                  className={styles.marketing__desc}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  sollicitudinbibendum senectus scelerisque non. Turpis matis
                  morbi vivera ipsum adipiscing Mauris volutpat sagittis, sit
                </motion.p>
                <ul className={styles.marketing__list}>
                  <motion.li
                    custom={1}
                    variants={animateText}
                    className={styles.marketing__item}
                  >
                    <span>
                      <DoneIcon />
                    </span>
                    Dolor duis lorem enim eu turpis potenti nulla semper
                  </motion.li>
                  <motion.li
                    custom={1}
                    variants={animateText}
                    className={styles.marketing__item}
                  >
                    <span>
                      <DoneIcon />
                    </span>
                    Dolor duis lorem enim eu turpis potenti nulla semper
                  </motion.li>
                  <motion.li
                    custom={1}
                    variants={animateText}
                    className={styles.marketing__item}
                  >
                    <span>
                      <DoneIcon />
                    </span>
                    Dolor duis lorem enim eu turpis potenti nulla semper
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Services;
