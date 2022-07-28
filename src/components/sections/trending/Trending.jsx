import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Trending.module.css';
import ProductCard from '../../product_card/ProductCard';
import arrowIcon from '../../../images/forward.png';
import product1 from '../../../images/product1.PNG';
import product2 from '../../../images/product2.PNG';
import product3 from '../../../images/product3.PNG';
import product4 from '../../../images/product4.PNG';
import product5 from '../../../images/product5.PNG';
import { OFFSET } from '../../../utils/constants';

const products = [
  { name: 'Shower Butter', img: product1 },
  { name: 'Luxury Oil Gel', img: product2 },
  { name: 'Body Oil', img: product3 },
  { name: 'Sunrise Shampoo', img: product4 },
  { name: 'Luxury Oil Gel', img: product5 },
];

const card = () => (
  <div>
    <p className={styles.heading}>
      Trending On <span className={styles.highlight}>Essentials</span>
    </p>
    <p className={styles.content}>
      Made with nature's best ingredients - our products' transparent
      ingredient. Fear of God Essentials.
    </p>
    <button className={styles.btn}>
      <span className={styles.btn_text}>Browse All Products</span>{' '}
      <img src={arrowIcon} alt="forward_icon" className={styles.btn_icon} />
    </button>
  </div>
);

const Trending = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className={styles.container}>
      <div
        className={styles.products_box}
        data-aos="fade-up-left"
        data-aos-delay={0}
        data-aos-easing="ease-in-out"
        data-aos-offset={OFFSET}
      >
        <div className={styles.product}>{card()}</div>
        {products?.map((product, index) => (
          <div key={index} className={styles.product}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
