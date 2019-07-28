import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './contentSection.scss';

const ContentSection = ({ icon = '', title, children }) => {
  const [ showLine, setLine ] = useState(false);

  useEffect(() => setLine(true), []);

  return (
    <CSSTransition
      in={showLine}
      timeout={2000}
      classNames="contentLine"
    >
      <div className={styles.section}>
        <div className={styles.titleWrap}>
          <span className={styles.title}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            <h1 className={styles.titleText}>{title}</h1>
          </span>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default ContentSection;
