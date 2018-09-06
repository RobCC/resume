import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import styles from './InfoPanel.scss';
import image from '../assets/img/me.jpg';

class InfoPanel extends Component {
  state = {
    isImgClear : false
  }

  render() {
    const {isImgClear} = this.state;

    return (
      <section className={`${styles.infoSide}`}>
        <div className={`${styles.top}`}>
          <div className={`${styles.image}`}>
            <CSSTransition in={isImgClear} timeout={1000} classNames="blurry">
              <img src={image}></img>
            </CSSTransition>
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
      isImgClear : true
    });
  }
}

export default InfoPanel;
