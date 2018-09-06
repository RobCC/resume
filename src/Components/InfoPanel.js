import React, {Component} from 'react';
import styles from './InfoPanel.scss';
import image from '../assets/img/me.jpg';

console.log(styles)

class InfoPanel extends Component {
  render() {
    return (
      <section className={`${styles.infoSide}`}>
        <div className={`${styles.top}`}>
          <img src={image}></img>
        </div>
        <div className={`${styles.info}`}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default InfoPanel;
