import React from 'react';

import styles from './career.scss';

const Career = ({ company, period, title, children }) => {
  return (
    <div className={styles.career}>
      <div className={styles.company}>{company}</div>
      <div className={styles.period}>{period}</div>
      <div className={styles.title}>{title}</div>
      <div className="">{children}</div>
    </div>
  );
};

export default Career;
