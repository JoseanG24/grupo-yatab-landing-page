import React from 'react';
import styles from '@/styles/notfound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page Not Found</p>
    </div>
  );
};

export default NotFound;
