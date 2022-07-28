import { OFFSET_LARGE } from '../../../utils/constants';
import TestimonialCard from '../../testimonial_card/TestimonialCard';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section
      className={styles.root}
      data-aos="zoom-in"
      data-aos-delay={200}
      data-aos-duration={700}
      data-aos-easing="ease-in"
      data-aos-offset={OFFSET_LARGE}
    >
      <TestimonialCard />
      <div className={styles.controls}>
        <p className={styles.control}></p>
        <p className={styles.active_control}></p>
        <p className={styles.control}></p>
      </div>
    </section>
  );
};

export default Testimonials;
