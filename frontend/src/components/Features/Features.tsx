import React from 'react';
import styles from './Features.module.css';
import FeaturesCard from './FeaturesCard';
import { ReactComponent as ServicesIcon } from '../../assets/services-icon.svg';
import { motion } from 'framer-motion';
import {
  featureAnimationProps,
  textAnimationProps
} from '../../pages/ServicesPage/animation';
import { DEFAULT_URL } from '../../consts/const';
import axios from 'axios';
import { useTranslation } from 'react-i18next';


type Card = {
  id: number;
  name: string;
  descr: string;
};

const Features: React.FC = () => {
 const [card, setCard] = React.useState<Card[]>([]);
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;  
   const text = t('Services');
  const words = text.split(" "); // Разбиваем текст на отдельные слова


  React.useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get<Card[]>(`${DEFAULT_URL}/content/projects/`, {
          headers: {
            'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`,
          },
        }); 
        setCard(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    fetchCards();
  }, [currentLang]);

  const [expandedCards, setExpandedCards] = React.useState<number[]>([]);
  const toggleCards = (id: number) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((itemId) => itemId !== id));
    } else {
      setExpandedCards([...expandedCards, id]);
    }
  };


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
          {card.map((item) => (
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
