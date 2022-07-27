import styles from './TestimonialCard.module.css';
import woman from '../../images/woman.png';

const TestimonialCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_parent}>
        <div className={styles.img_box}>
          <img src={woman} alt="woman" className={styles.img} />
        </div>
      </div>
      <p className={styles.quote_mark}>"</p>
      <p className={styles.quote}>
        The UK jewellery awards is an event we always look forward to and we are
        so honoured to be recognised.
      </p>
      <p className={styles.name}>Jane Cooper</p>
      <p className={styles.location}>Naperville, USA</p>
    </div>
  );
};

export default TestimonialCard;
