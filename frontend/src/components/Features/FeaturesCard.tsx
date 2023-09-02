import React from 'react';
import styles from './Features.module.css';
import CardIcon from '../../assets/Icon.png';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-left.svg';

type FeaturesCardProps = {
  id: number;
  title: string;
  text: string;
  isExpanded: boolean;
  onToggle: (id: number) => void;
};

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  id,
  title,
  text,
  isExpanded,
  onToggle
}) => {
  const cardText = isExpanded ? text : text.slice(0, 66);
  const cardHeight = isExpanded ? 'auto' : '415px';

  return (
    <div className={styles.features__card} style={{ height: cardHeight }}>
      <div className={styles.features__card__img}>
        <img src={CardIcon} alt="" className="w-22 h-22" />
      </div>
      <h3 className={styles.features__card__title}>{title}</h3>
      <p className={styles.features__card__desc}>{cardText}</p>

      <div className="flex justify-end items-center">
        {text.length > 66 && (
          <span>
            <ArrowDownIcon
              onClick={() => onToggle(id)}
              className={`${
                isExpanded ? styles.arrow__down__rotated : styles.arrow__down
              }`}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default FeaturesCard;
