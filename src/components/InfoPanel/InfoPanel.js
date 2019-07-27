import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

import Picture from 'components/Picture/Picture';
import InfoSection from 'components/InfoSection/InfoSection';
import Contact from 'components/Contact/Contact';

import css from './infoPanel.scss';
import image from '../../assets/img/me.jpg';

const PHONE_NUMBER = '+52 1 33 3952 3772';
const EMAIL = 'rrc0138@gmail.com';

const getGmailSendUrl = email => `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&tf=1`;

const InfoPanel = () => {
  return (
    <section className={css.infoSide}>
      <Picture image={image} />

      <div className={css.info}>
        <InfoSection title="About Me" icon="user">
          Hi, my name is Roberto Chávez, I am a web developer!
          I love creating well written, quality web apps on both my work and my free time.
          I enjoy a challenge and moving forward learning new technologies in this
          ever changing environment.
        </InfoSection>

        <InfoSection title="Contact" icon="id-card">
          You can contact me through the following:

          <Contact icon={faEnvelope}>
            <a href={getGmailSendUrl(EMAIL)}>{EMAIL}</a>
          </Contact>

          <Contact icon={faPhone}>{PHONE_NUMBER}</Contact>

          I'm also on the following sites:
          <div>
            <Contact icon={faLinkedin} justIcon={true} href="https://www.linkedin.com/in/jrobcc/" />
            <Contact icon={faGithub} justIcon={true} href="https://github.com/RobCC" />
            <Contact icon={faCodepen} justIcon={true} href="https://codepen.io/robcc/" />
          </div>
        </InfoSection>
      </div>
    </section>
  );
};

export default InfoPanel;
