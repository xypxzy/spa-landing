import React from 'react';
import styles from './Features.module.css';
import FeaturesCard from './FeaturesCard';
import { ReactComponent as ServicesIcon } from '../../assets/services-icon.svg';
import { motion } from 'framer-motion';
import {
  featureAnimationProps,
  textAnimationProps
} from '../../pages/ServicesPage/animation';

const Features: React.FC = () => {
  const [expandedCards, setExpandedCards] = React.useState<number[]>([]);
  const toggleCards = (id: number) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((itemId) => itemId !== id));
    } else {
      setExpandedCards([...expandedCards, id]);
    }
  };

  type Card = {
    id: number;
    title: string;
    text: string;
  };

  const cardContent: Card[] = [
    {
      id: 1,
      title: 'Media Marketing',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, debitis deserunt error enim explicabo quia impedit officiis dolor harum, vitae numquam assumenda eligendi, nesciunt similique. Ratione quia asperiores ea facere'
    },
    {
      id: 2,
      title: 'Media Marketing',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, debitis deserunt error enim explicabo quia impedit officiis dolor harum, vitae numquam assumenda eligendi, nesciunt similique. Ratione quia asperiores ea facere'
    },
    {
      id: 3,
      title: 'Media Marketing',
      text: 'Lorem ipsum dolor uia asperiores ea facere'
    }
  ];

  return (
    <motion.section className={styles.features}>
      <div className={styles.features__container}>
        <div className={styles.features__header}>
          <div className={styles.features__left}>
            <ServicesIcon className=" h-20 w-20 mb-10" />
            <motion.h2 {...textAnimationProps}>
              High-impact services to take your business to the next level
            </motion.h2>
          </div>
        </div>
        <motion.div
          {...featureAnimationProps}
          className={styles.features__cards}
        >
          {cardContent.map((item) => (
            <FeaturesCard
              isExpanded={expandedCards.includes(item.id)}
              onToggle={() => toggleCards(item.id)}
              key={item.id}
              {...item}
            ></FeaturesCard>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
