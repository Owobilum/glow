import styles from './SplashScreen.module.css';

const SplashScreen = () => {
  return (
    <div className={styles.root}>
      <div className={styles.flex}>
        <p className={styles.ball}></p>
        <p className={styles.text}>Glow</p>
      </div>
    </div>
  );
};

export default SplashScreen;
