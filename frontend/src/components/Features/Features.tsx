import React from 'react';
import styles from './Features.module.css';
import FeaturesCard from './FeaturesCard';
import { ReactComponent as ServicesIcon } from '../../assets/services-icon.svg';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
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
    <motion.section
      className={styles.features}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <div className={styles.features__container}>
        <div className={styles.features__header}>
          <div className={styles.features__left}>
            <ServicesIcon className=" h-20 w-20 mb-10" />
            <motion.h2 custom={1} variants={animateText}>
              High-impact services to take your business to the next level
            </motion.h2>
          </div>
          <Link className={styles.features__btn} to="servies">
            <p>Our services</p>
            <ArrowLeft />
          </Link>
        </div>
        <motion.div
          variants={featureAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className={styles.features__cards}
        >
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
