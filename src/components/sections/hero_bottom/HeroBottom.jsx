import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './HeroBottom.module.css';
import stickerImg from '../../../images/sticker.PNG';
import lotionImg from '../../../images/lotions.png';
import { OFFSET } from '../../../utils/constants';

const HeroBottom = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.right_column}>
        <div className={styles.video_box}>
          <div className={styles.star}>
            {' '}
            <p>New</p>{' '}
          </div>
          <video width="100%" height="100%" controls>
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className={styles.left_column}
          data-aos="zoom-in"
          data-aos-delay={0}
          data-aos-duration={600}
          data-aos-easing="ease-in"
          data-aos-offset={OFFSET}
        >
          <div className={styles.left_box}>
            <div className={styles.sticker_box}>
              {' '}
              <img
                src={stickerImg}
                alt=""
                className={styles.sticker_img}
              />{' '}
            </div>
            <img src={lotionImg} alt="" />
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
            The self care brand that's setting a new{' '}
            <span className={styles.highlight}>standard</span>
          </p>
          <p className={styles.heading1}>
            <span className={styles.highlight}>Clean</span> products.
          </p>
          <div className={styles.questions_box}>
            <div>
              <p className={styles.question_head}>Where are products made?</p>
              <p className={styles.question_body}>
                Many brands, especially in period care, carry products that take
                centuries.
              </p>
            </div>
            <div>
              <p className={styles.question_head}>Where are products made?</p>
              <p className={styles.question_body}>
                Many brands, especially in period care, carry products that take
                centuries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBottom;
