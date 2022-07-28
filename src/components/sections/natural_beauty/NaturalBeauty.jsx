import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './NaturalBeauty.module.css';
import dataImg from '../../../images/data_graphic.PNG';
import modelImg from '../../../images/model2.png';
import { DELAY, OFFSET } from '../../../utils/constants';

const NaturalBeauty = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.right_column}>
        <div
          className={styles.left_column}
          data-aos="zoom-in"
          data-aos-delay={DELAY}
          data-aos-duration={600}
          data-aos-easing="ease-in"
          data-aos-offset={OFFSET}
        >
          <div className={styles.left_box}>
            <img src={modelImg} alt="model" width="300px" height="250px" />
          </div>
        </div>
        <div
          className={styles.column_box}
          data-aos="slide-up"
          data-aos-delay={0}
          data-aos-easing="ease-in-out"
          data-aos-offset={OFFSET}
        >
          <p className={styles.heading1}>
            We make going all natural
            <span className={styles.highlight}> Beauty</span>
          </p>
          <div className={styles.content_box}>
            <p className={styles.text_box}>
              Made with natures best ingredients - our products' transparent
              ingredient lists allow you to know
            </p>
            <p>
              <img src={dataImg} alt="" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalBeauty;
