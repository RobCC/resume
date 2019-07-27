import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './infoSection.scss';

const InfoSection = ({ icon, title, children }) => {
  const [ showLine, setLine ] = useState(false);
  const [ showText ] = useState(false);
  const [ showContent, setContent ] = useState(false);

  useEffect(() => setLine(true), []);

  return (
    <div className={styles.infoSection}>
      <CSSTransition
        in={showLine}
        timeout={500}
        classNames="line"
        onEntered={() => setContent(true)}
      >
        <div className={styles.titleWrap}>
          <span className={styles.title}>
            <span className={styles.titleText}>{title}</span>
          </span>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </div>
      </CSSTransition>

      <CSSTransition in={showContent} timeout={500} classNames="content" unmountOnExit>
        <div className={styles.content}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

InfoSection.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default InfoSection;
