import styles from './Faq.module.css';
import lotionImg from '../../../images/faq_lotion.png';
import Accordion from '../../accordion/Accordion';

const Faq = () => {
  return (
    <section className={styles.root}>
      <div className={styles.left_column}>
        <div className={styles.left_box}>
          <img src={lotionImg} alt="lotion" />
        </div>
      </div>
      <div className={styles.right_column}>
        <Accordion />
      </div>
    </section>
  );
};

export default Faq;
