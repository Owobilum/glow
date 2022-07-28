import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Faq.module.css';
import lotionImg from '../../../images/faq_lotion.png';
import Accordion from '../../accordion/Accordion';
import { OFFSET_LARGE } from '../../../utils/constants';

const Faq = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className={styles.root}>
      <div
        className={styles.left_column}
        data-aos="zoom-in"
        data-aos-delay={0}
        data-aos-duration={600}
        data-aos-easing="ease-in"
        data-aos-offset={OFFSET_LARGE}
      >
        <div className={styles.left_box}>
          <img src={lotionImg} alt="lotion" />
        </div>
      </div>
      <div
        className={styles.right_column}
        data-aos="slide-up"
        data-aos-delay={0}
        data-aos-easing="ease-in-out"
        data-aos-offset={OFFSET_LARGE}
      >
        <Accordion />
      </div>
    </section>
  );
};

export default Faq;
