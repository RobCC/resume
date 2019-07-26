import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import styles from './picture.scss';

const Picture = ({ image }) => {
  const [ isImageClear, setIsImageClear ] = useState(false);

  useEffect(() => setIsImageClear(true), []);

  return (
    <div className={styles.image}>
      <CSSTransition in={isImageClear} timeout={1500} classNames="blurry">
        <img src={image}></img>
      </CSSTransition>
    </div>
  );
};

Picture.propTypes = {
  image: PropTypes.string,
};

export default Picture;
