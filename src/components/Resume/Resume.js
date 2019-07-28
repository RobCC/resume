import React from 'react';

import InfoSide from 'components/InfoSide/InfoSide';
import ContentSection from 'components/ContentSection/ContentSection';

import styles from './resume.scss';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <InfoSide />

      <div className={styles.rightSide}>
        <ContentSection title="Careers">

        </ContentSection>
      </div>
    </div>
  );
};

export default Resume;
