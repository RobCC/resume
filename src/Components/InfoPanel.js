import React, { Component } from 'react';
import css from './InfoPanel.scss';
import image from '../assets/img/me.jpg';

import InfoPicture from 'Components/InfoPicture';
import InfoSection from 'Components/InfoSection';

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
          </InfoSection>
        </div>
      </section>
    )
  }

}

export default InfoPanel;
