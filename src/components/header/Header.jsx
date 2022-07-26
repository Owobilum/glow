import React from 'react';

import styles from './Header.module.css';
import image from '../../images/img.PNG';

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        Glow<span className={styles.dot}>.</span>
      </div>
      <div className={styles.routes_container}>
        <div className={styles.routes}>
          {' '}
          <p className={styles.route_link}>Product</p>
          <p className={styles.route_link}>About</p>
          <p className={styles.route_link}>Blog</p>
          <p className={styles.route_link}>Reviews</p>
        </div>
        <div>
          <p className={styles.route_link}>
            <img src={image} alt="" width="50px" />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
