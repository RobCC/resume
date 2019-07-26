import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './contact.scss';

const Contact = ({ icon = '', justIcon = false, href, children }) => {
  return (
    <div className={`${styles.contact} ${justIcon ? styles.inline : ''}`}>
      {justIcon
        ? <a href={href}> <FontAwesomeIcon icon={icon} className={styles.icon} /> </a>
        : <FontAwesomeIcon icon={icon} className={styles.icon} />
      }
      <span className={styles.info}>{children}</span>
    </div>
  );
};

Contact.propTypes = {
  icon: PropTypes.object,
  justIcon: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.any,
};

export default Contact;
