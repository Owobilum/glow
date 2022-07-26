import styles from './ProductCard.module.css';

const ProductCard = ({ product: { name, img } }) => {
  return (
    <div className={styles.container}>
      <p className={styles.img_box}>
        <img src={img} alt="" className={styles.img} />
      </p>
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>$190.99</p>
    </div>
  );
};

export default ProductCard;
