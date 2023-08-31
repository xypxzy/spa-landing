import React from 'react';
import styles from './NotFoundPage.module.css';
import error from '../../assets/404.svg';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <section className={styles.error}>
      <div className={styles.error__container}>
        <img src={error} alt="error" />
        <h3 className={styles.error__title}>Oops, this page is not found</h3>
        <p className={styles.error__desc}>
          We apologize, but it seems that the web page you're attempting to
          access is currently unavailable. Please ensure you've entered the
          correct URL or try again later.
        </p>
        <Link className={styles.error__btn} to="/">
          Go To Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
