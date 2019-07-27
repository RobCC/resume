import React from 'react';
import classNames from 'classNames';

import InfoPanel from 'components/InfoPanel/InfoPanel';

import styles from './resume.scss';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <InfoPanel />

      <div className={classNames(styles.side, styles.right)}>

      </div>
    </div>
  );
};

export default Resume;
