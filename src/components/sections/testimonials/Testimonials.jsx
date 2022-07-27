import TestimonialCard from '../../testimonial_card/TestimonialCard';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.root}>
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
