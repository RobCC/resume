import React from 'react';

import InfoPanel from 'components/InfoPanel/InfoPanel';
import ContentSection from 'components/ContentSection/ContentSection';

import styles from './resume.scss';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <InfoPanel />

      <div className={styles.rightSide}>
        <ContentSection title="Education">
          Stuff
        </ContentSection>
      </div>
    </div>
  );
};

export default Resume;
