import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './InfoPanel.scss';
import image from '../assets/img/me.jpg';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import InfoPicture from 'Components/InfoPicture';
import InfoSection from 'Components/InfoSection';
import ContactLine from 'Components/ContactLine';

class InfoPanel extends Component {
  state = {
    isFooterHidden : true
  }

  render() {
    const { isFooterHidden } = this.state;
    return (
      <section className={css.infoSide}>
        <div className={css.top}>
          <InfoPicture img={image} />
        </div>
        <div className={css.info}>
          <InfoSection title="About Me" icon="user">
            Hi, my name is Roberto Chávez. I am a web developer with skills on front-end.
            I love creating well written, quality web apps on both my work and my free time.
            I enjoy a challenge and moving forward learning new technologies in this
            ever changing environment.
          </InfoSection>
          <InfoSection title="Contact" icon="id-card">
            You can contact me through the following:
            <ContactLine icon={faEnvelope}>rrc0138@gmail.com</ContactLine>
            <ContactLine icon={faPhone}>+52 1 33 3952 3772</ContactLine>
          </InfoSection>
        </div>
         <footer>
          Powered by React
          <FontAwesomeIcon icon={faReact} className={css.react} />
        </footer>
      </section>
    )
  }

}

export default InfoPanel;
