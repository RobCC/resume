import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './InfoPanel.scss';
import image from '../assets/img/me.jpg';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faReact, faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

import InfoPicture from 'Components/InfoPicture';
import InfoSection from 'Components/InfoSection';
import ContactLine from 'Components/ContactLine';

const phone = '+52 1 33 3952 3772';

class InfoPanel extends Component {

  render() {
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
            <ContactLine icon={faEnvelope}>
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rrc0138@gmail.com&tf=1">rrc0138@gmail.com</a>
            </ContactLine>
            <ContactLine icon={faPhone}>
              {phone}
            </ContactLine>

            I'm also on the following sites:
            <div>
              <ContactLine icon={faLinkedin} justIcon={true} href="https://www.linkedin.com/in/jrobcc/" />
              <ContactLine icon={faGithub} justIcon={true} href="https://github.com/RobCC" />
              <ContactLine icon={faCodepen} justIcon={true} href="https://codepen.io/robcc/" />
            </div>
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
