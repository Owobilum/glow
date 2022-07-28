import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Hero.module.css';
import arrowIcon from '../../../images/forward.png';
import playIcon from '../../../images/play.png';
import modelIcon from '../../../images/model_mini.PNG';
import modelImg from '../../../images/model.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      className={styles.root}
      data-aos="slide-up"
      data-aos-delay="0"
      data-aos-easing="ease-in-out"
    >
      <div>
        <p className={styles.heading}>Let your skin</p>
        <div className={styles.heading}>
          <p>Going</p>{' '}
          <img src={modelIcon} alt="" className={styles.model_mini} />{' '}
          <p>out.</p>
        </div>
        <p className={styles.mission}>
          We want to bring to the world through our products that very special
          feeling joy, healthy and positive energy.
        </p>
        <div className={styles.ctas}>
          <button className={styles.btn}>
            <span className={styles.btn_text}>Shop now</span>{' '}
            <img
              src={arrowIcon}
              alt="forward_icon"
              className={styles.btn_icon}
            />
          </button>
          <p className={styles.text_cta}>
            {' '}
            <img src={playIcon} alt="more" className={styles.play_icon} />{' '}
            <span className={styles.play_text}>How to use</span>
          </p>
        </div>
      </div>
      <div className={styles.img_column}>
        <img src={modelImg} alt="model" className={styles.model_img} />
      </div>
    </section>
  );
};

export default Hero;
