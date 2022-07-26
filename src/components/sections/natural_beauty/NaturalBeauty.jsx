import styles from './NaturalBeauty.module.css';
import dataImg from '../../../images/data_graphic.PNG';
import modelImg from '../../../images/model2.png';

const NaturalBeauty = () => {
  return (
    <section className={styles.container}>
      <div className={styles.right_column}>
        <div className={styles.left_column}>
          <div className={styles.left_box}>
            <img src={modelImg} alt="" width="300px" height={'250px'} />
          </div>
        </div>
        <div className={styles.column_box}>
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
