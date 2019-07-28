import React from 'react';
import { faLaptopCode, faBook, faTools, faScroll } from '@fortawesome/free-solid-svg-icons';

import InfoSide from 'components/InfoSide/InfoSide';
import ContentSection from 'components/ContentSection/ContentSection';
import Career from 'components/Career/Career';
import Skill from 'components/Skill/Skill';

import styles from './resume.scss';

const Resume = () => {
  const { row, column } = styles;

  return (
    <div className={styles.resume}>
      <InfoSide />

      <section className={styles.rightSide}>
        <ContentSection title="Careers" icon={faLaptopCode}>
          <div className={row}>
            <div className={column}>
              <Career company="Arenso" period="January 2014 - December 2015" title="Intern">
                I worked in the development area, giving
                corrective and perfective maintenance to desktop systems built in Visual Basic. <br />

                As my first job in a small company,
                I’ve learned about how a software company works & the basics of maintaining and
                development in a teamwork environment.
              </Career>
            </div>
            <div className={column}>
              <Career company="TCS" period="January 2016 - September 2018" title="Web Developer">
                Started as a Java developer,
                ended up working as a front-end developer, mostly Backbone.js.
                I was responsible of maintaining
                and creating new functionalities on a web app based on client's necessities.
              </Career>
            </div>
          </div>

          <div className={row}>
            <div className={column}>
              <Career company="Accedo" period="Octuber 2018 - currently" title="Web Engineer">
                Working on multiple web & smart TV apps, focused on streaming, using technologies such as
                Angular, React, or plan JS.
              </Career>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Skills" icon={faBook}>
          <div className={row}>
            <div className={column}>
              <Skill name="Javascript" value="Strong" />
            </div>
            <div className={column}>
              <Skill name="Typescript" value="Strong" />
            </div>
            <div className={column}>
              <Skill name="Coffeescript" value="Strong" />
            </div>
            <div className={column}>
              <Skill name="React" value="Strong" />
            </div>
            <div className={column}>
              <Skill name="Backbone" value="Knowledged" />
            </div>

          </div>
          <div className={row}>
            <div className={column}>
              <Skill name="Angular" value="Knowledged" />
            </div>
            <div className={column}>
              <Skill name="Node" value="Knowledged" />
            </div>
            <div className={column}>
              <Skill name="jQuery" value="Strong" />
            </div>
            <div className={column}>
              <Skill name="SASS/LESS" value="Strong" />
            </div>
            <div className={column}>
              <Skill name="Java" value="Knowledged" />
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Tools" icon={faTools}>
          <div className={row}>
            <div className={column}>
              <Skill name="VSCode" />
            </div>
            <div className={column}>
              <Skill name="Postman" />
            </div>
            <div className={column}>
              <Skill name="Atlassian/Gira" />
            </div>
            <div className={column}>
              <Skill name="Git" />
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Certifications" icon={faScroll}>
          <ul>
            <li>
              Oracle Certified Associate, Java SE 8 Programmer
            </li>
          </ul>
        </ContentSection>
      </section>
    </div>
  );
};

export default Resume;
