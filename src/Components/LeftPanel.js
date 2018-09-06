import React, {Component} from 'react';
import styles from './LeftPanel.scss';

class LeftPanel extends Component {
  render() {
    return (
      <section className={styles.leftSide}>
        {this.props.children}
      </section>
    )
  }
}

export default LeftPanel;
