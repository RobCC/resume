import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import styles from './InfoSection.scss';

class InfoSection extends Component {
  render() {
    return (
      <div className={styles.infoSection}>
        <div className={styles.titleWrap}>
          <span className={styles.title}>{this.props.title}</span>
          <FontAwesomeIcon icon={this.props.icon} className={styles.icon} />
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default InfoSection;
