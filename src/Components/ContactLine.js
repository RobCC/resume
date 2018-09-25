import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './ContactLine.scss';

class ContactLine extends Component {
  static defaultProps = {
    icon : '',
    justIcon : false
  }

  render() {
    const { icon, children, justIcon, href } = this.props;

    return (
      <div className={`${css.contactLine} ${justIcon ? css.inline : ''}`}>
        {justIcon
          ? <a href={href}> <FontAwesomeIcon icon={icon} className={css.icon} /> </a>
          : <FontAwesomeIcon icon={icon} className={css.icon} />
        }
        <span className={css.info}>{children}</span>
      </div>
    );
  }
}

export default ContactLine;
