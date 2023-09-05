import React from 'react';
import styles from './Services.module.css';
import Features from '../../components/Features/Features';
import axios from 'axios';
import serviceImg from '../../assets/serviceImg.png';
import marketingLogo from '../../assets/marketing-logo.png';
import { ReactComponent as DoneIcon } from '../../assets/marketing-icon.svg';
import { motion } from 'framer-motion';
import { featureAnimationProps, textAnimationProps } from './animation';
import { useTranslation } from 'react-i18next';
import { DEFAULT_URL } from '../../consts/const';

interface NameProps {
  id: number;
  name: string;
}

interface DescrProps {
  id: number;
  description: string;
}

const Services: React.FC = () => {
  const [name, setName] = React.useState<NameProps[]>([]);
  const [descr, setDescr] = React.useState<DescrProps[]>([]);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  React.useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get<NameProps[]>(
          `${DEFAULT_URL}/content/content/`,
          {
            headers: {
              'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`
            }
          }
        );
        setName(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    fetchName();
  }, [currentLang]);

  React.useEffect(() => {
    const fetchDescr = async () => {
      try {
        const response = await axios.get<DescrProps[]>(
          `${DEFAULT_URL}/content/content/`,
          {
            headers: {
              'Accept-Language': `${currentLang == 'kg' ? 'ky' : currentLang}`
            }
          }
        );
        setDescr(response.data);
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    };

    fetchDescr();
  }, [currentLang]);
  return (
    <motion.div {...featureAnimationProps}>
      <section className={styles.services}>
        <div className={styles.services__container}>
          <div className={styles.services__header}>
            <h1 className={styles.services__title}>{t('Services')}</h1>
          </div>
        </div>
      </section>
      <Features />
      <motion.section className={styles.marketing} {...featureAnimationProps}>
        <div className={styles.marketing__container}>
          <div className={styles.marketing__content}>
            <img src={serviceImg} alt="PC" className={styles.marketing__img} />
            <div className={styles.marketing__right}>
              <div className={styles.marketing__top}>
                <motion.img
                  {...featureAnimationProps}
                  src={marketingLogo}
                  alt="marketing logo"
                />
                <motion.h3
                  {...textAnimationProps}
                  className={styles.marketing__title}
                >
                  {name[0]}
                </motion.h3>
              </div>
              <hr className={styles.hr} />
              <div className={styles.marketing__middle}>
                <motion.p
                  {...textAnimationProps}
                  className={styles.marketing__desc}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  sollicitudinbibendum senectus scelerisque non. Turpis matis
                  morbi vivera ipsum adipiscing Mauris volutpat sagittis, sit
                </motion.p>
                <ul className={styles.marketing__list}>
                  <motion.li
                    {...textAnimationProps}
                    className={styles.marketing__item}
                  >
                    <span>
                      <DoneIcon />
                    </span>
                    Dolor duis lorem enim eu turpis potenti nulla semper
                  </motion.li>
                  <motion.li
                    {...textAnimationProps}
                    className={styles.marketing__item}
                  >
                    <span>
                      <DoneIcon />
                    </span>
                    Dolor duis lorem enim eu turpis potenti nulla semper
                  </motion.li>
                  <motion.li
                    {...textAnimationProps}
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
