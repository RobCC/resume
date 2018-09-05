import React, {Component} from 'react';
import styles from './LeftPanel.scss';

console.log(styles)

class LeftPanel extends Component {
  render() {
    return (
      <div className={styles.leftSide}>
        {this.props.children}
      </div>
    )
  }
}

export default LeftPanel;
