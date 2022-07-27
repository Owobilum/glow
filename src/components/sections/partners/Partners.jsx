import styles from './Partners.module.css';
import framesi from '../../../images/partner1.PNG';
import barione from '../../../images/partner2.PNG';
import aloeVera from '../../../images/partner3.PNG';
import ck from '../../../images/partner4.PNG';
import vagoda from '../../../images/partner5.PNG';

const partners = [framesi, barione, aloeVera, ck, vagoda];

const Partners = () => {
  return (
    <section className={styles.root}>
      <div className={styles.partners}>
        {partners?.map((partner, index) => (
          <div key={index} className={styles.partner}>
            {' '}
            <img src={partner} alt="partner" className={styles.img} />{' '}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
