import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Footer.module.css';
import facebook from '../../images/facebook.PNG';
import twitter from '../../images/twitter.PNG';
import instagram from '../../images/instagram.PNG';
import linkedin from '../../images/linkedin.PNG';
import send from '../../images/send.PNG';
import { DELAY, OFFSET_LARGE } from '../../utils/constants';

const socials = [facebook, instagram, twitter, linkedin];

const Footer = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <footer>
      <div
        className={styles.root}
        data-aos="slide-up"
        data-aos-delay={DELAY}
        data-aos-easing="ease-in-out"
        data-aos-offset={OFFSET_LARGE}
      >
        <div className={styles.flex_container}>
          <div className={styles.column1}>
            <div className={styles.logo}>
              Glow<span className={styles.highlight}>.</span>
            </div>
            <div>
              Keep up with our new releases, beauty tips and what's Emma's been
              up to
            </div>
            <div className={styles.socials}>
              {socials?.map((network, index) => (
                <div key={index}>
                  <img
                    src={network}
                    alt="socials"
                    className={styles.social_icon}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.column2}>
            <p className={styles.column_head}>Company</p>
            <p className={styles.column_text}>About</p>
            <p className={styles.column_text}>Jobs</p>
            <p className={styles.column_text}>Branding</p>
            <p className={styles.column_text}>Newsroom</p>
          </div>
          <div className={styles.column2}>
            <p className={styles.column_head}>Resources</p>
            <p className={styles.column_text}>College</p>
            <p className={styles.column_text}>Support</p>
            <p className={styles.column_text}>Safety</p>
            <p className={styles.column_text}>StreamKit</p>
          </div>
          <div className={styles.column2}>
            <p className={styles.column_head}>Terms and Condition</p>
            <p className={styles.column_text}>Policy</p>
            <p className={styles.column_text}>Faq</p>
            <p className={styles.column_text}>Return Policy</p>
            <p className={styles.column_text}>Tracking</p>
          </div>
          <div className={styles.column2}>
            <p className={styles.column_head}>Subscribe</p>
            <p className={styles.column_text}>Get 10% off your first order</p>
            <div className={styles.column_text}>
              <div>
                {' '}
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Enter your Email"
                />
                <button className={styles.btn}>
                  {' '}
                  <img src={send} alt="send" />{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright_box}>
        <p className={styles.copyright_text}>
          Copyright © 2022 Musemind | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
