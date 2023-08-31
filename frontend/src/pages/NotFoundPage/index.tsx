import React from 'react';
import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
import error from '../../assets/404.svg';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <section className={styles.error}>
        <img src={error} alt="404 error image" />
        <p className={styles.error__desc}>Oops, this page is not found</p>
        <div className="link-container">
          <Link to="/" className="more-link">
            Go To Homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
