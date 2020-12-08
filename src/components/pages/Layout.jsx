import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../pages/HomePage/HomePage.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <ul className={styles.wrapper}>
        <li>
          <Link to="/">
            {' '}
            <span className={styles.homeItem}>Home</span>{' '}
          </Link>
        </li>
        <li>
          <Link to="/movies">
            {' '}
            <span className={styles.moviesItem}>Movies</span>
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
