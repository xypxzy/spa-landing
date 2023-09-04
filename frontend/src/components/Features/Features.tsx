import React from 'react';
import styles from './Features.module.css';
import FeaturesCard from './FeaturesCard';
import { ReactComponent as ServicesIcon } from '../../assets/services-icon.svg';
import { motion } from 'framer-motion';
import {
  featureAnimationProps,
  textAnimationProps
} from '../../pages/ServicesPage/animation';
import { useTranslation } from 'react-i18next';


const Features: React.FC = () => {

  const { t } = useTranslation(['translation', 'services']);

  const text = t('Services');
  const words = text.split(" "); 
  
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
      title: 'Ответсвенность',
      text: 'Мы ответственно подходим к выполнению всех наших обязательств перед заказчиками и персоналом.'
    },
    {
      id: 2,
      title: 'Забота о природе',
      text: 'Мы ориентируемся на использование технологий и решений, не наносящих вреда природе'
    },
    {
      id: 3,
      title: 'Репутация',
      text: 'Мы дорожим своей надежной репутацией'
    }
  ];

  return (
    <motion.section className={styles.features}>
      <div className={styles.features__container}>
        <div className={styles.features__header}>
          <div className={styles.features__left}>
            <ServicesIcon className=" h-20 w-20 mb-10" />
            <motion.h2 {...textAnimationProps}>  
             {words}
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
