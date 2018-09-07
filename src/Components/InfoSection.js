import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import css from './InfoSection.scss';

class InfoSection extends Component {
  state = {
    showTitleLine : false,
    showTitleText : false,
    showContent   : false
  }

  render() {
    const { showTitleLine, showTitleText, showContent } = this.state;

    return (
      <div className={css.infoSection}>
        <CSSTransition
          in={showTitleLine} timeout={500} classNames="line"
          onEntered={event => {
            this.setState({
              showContent : true
            });
          }}
        >
          <div className={css.titleWrap}>
            <span className={css.title}>{this.props.title}</span>
            <FontAwesomeIcon icon={this.props.icon} className={css.icon} />
          </div>
        </CSSTransition>
        <CSSTransition in={showContent} timeout={500} classNames="content" unmountOnExit>
          <div className={css.content}>
            {this.props.children}
          </div>
        </CSSTransition>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      showTitleLine : true
    });
  }
}

export default InfoSection;
