import React from 'react';
import styles from './Features.module.css';
import { ReactComponent as CardIcon } from '../../assets/Icon-1.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-left.svg';

const FeaturesCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const showFullText = () => {
    setIsExpanded(!isExpanded);
  };

  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, debitis deserunt error enim explicabo quia impedit officiis dolor harum, vitae numquam assumenda eligendi, nesciunt similique. Ratione quia asperiores ea facere';

  const cardText = isExpanded ? text : text.slice(0, 66);

  return (
    <div className={styles.features__card}>
      <div className={styles.features__card__img}>
        <CardIcon className="w-22 h-22" />
      </div>
      <h3 className={styles.features__card__title}>Social Media Marketing</h3>
      <p className={styles.features__card__desc}>{cardText}</p>

      <div className="flex justify-end items-center">
        {text.length > 66 ? (
          <span>
            <ArrowDownIcon
              onClick={() => showFullText()}
              className={`${
                isExpanded ? styles.arrow__down__rotated : styles.arrow__down
              }`}
            />
          </span>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default FeaturesCard;
