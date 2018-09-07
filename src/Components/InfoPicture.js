import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './InfoPicture.scss';

class InfoPicture extends Component {
  state = {
    isImgClear : false
  }

  render() {
    const {isImgClear} = this.state;

    return (
      <div className={css.image}>
        <CSSTransition in={isImgClear} timeout={1200} classNames="blurry">
          <img src={this.props.img}></img>
        </CSSTransition>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      isImgClear : true
    });
  }
}

export default InfoPicture;
