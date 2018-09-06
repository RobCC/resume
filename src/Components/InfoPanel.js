import React, { Component } from 'react';
import { Transition, CSSTransition } from 'react-transition-group'
import styles from './InfoPanel.scss';
import image from '../assets/img/me.jpg';

class InfoPanel extends Component {
  state = {
    isImgBlurry : true
  }

  render() {
    const {isImgBlurry} = this.state;

    return (
      <section className={`${styles.infoSide}`}>
        <div className={`${styles.top}`}>
          <div className={`${styles.image}`}>
            <img src={image} className={isImgBlurry ? styles.blurry : ''}></img>
          </div>
        </div>
        <div className={`${styles.info}`}>
          Hello World
        </div>
      </section>
    )
  }

  componentDidMount() {
    this.setState({
      isImgBlurry : false
    });
  }
}

export default InfoPanel;
