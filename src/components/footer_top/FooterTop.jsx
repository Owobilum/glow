import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './FooterTop.module.css';
import img1 from '../../images/image1.PNG';
import img2 from '../../images/image2.PNG';
import img3 from '../../images/image3.PNG';
import insta from '../../images/insta.PNG';
import go from '../../images/go.PNG';
import { DELAY, OFFSET_LARGE } from '../../utils/constants';

const FooterTop = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div
      className={styles.root}
      data-aos="slide-left"
      data-aos-delay={DELAY}
      data-aos-easing="ease-in-out"
      data-aos-offset={OFFSET_LARGE}
    >
      <div className={styles.item}>
        <img className={styles.content} src={img1} alt="lotion" />
      </div>
      <div className={styles.item}>
        <img src={img2} className={styles.content} alt="cream" />
      </div>
      <div className={styles.item}>
        <img src={img3} className={styles.content} alt="oil" />
      </div>
      <div className={styles.item2}>
        <p>
          <img src={insta} alt="insta" />
        </p>
        <p className={styles.mini_text}>
          Join us and get all the services we provide
        </p>
        <p>
          <button className={styles.btn}>
            <img src={go} alt="proceed" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
