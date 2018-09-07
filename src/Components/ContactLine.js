import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './ContactLine.scss';

class ContactLine extends Component {
  render() {
    const { icon, children } = this.props;
    return (
      <div className={css.contactLine}>
        <FontAwesomeIcon icon={icon} className={css.icon} />
        <span className={css.info}>{children}</span>
      </div>
    );
  }
}


export default ContactLine;
