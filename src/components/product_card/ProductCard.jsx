import { useState } from 'react';

import styles from './ProductCard.module.css';
import likeIcon from '../../images/like.PNG';
import bagIcon from '../../images/bag.PNG';

const ProductCard = ({ product: { name, img } }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.img_box}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className={styles.actions}>
            <button className={styles.buy_btn}>
              {' '}
              <img src={bagIcon} alt="bag" />
            </button>
            <button className={styles.like_btn}>
              <img src={likeIcon} alt="like" />{' '}
            </button>
          </div>
        )}
        <img src={img} alt="" className={styles.img} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>$190.99</p>
    </div>
  );
};

export default ProductCard;
