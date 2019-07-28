import React from 'react';
import classNames from 'classnames';

import styles from './skill.scss';

const Skill = ({ name, value = '' }) => {
  const valueClasses = classNames(styles.value, {
    [styles.strong]: value.toLowerCase() === 'strong',
    [styles.knowledge]: value.toLowerCase() === 'knowledged'
  });

  return (
    <div className={styles.skill}>
      <span className={styles.name}>{name}</span>
      {value && <span className={valueClasses}>{value}</span>}
    </div>
  );
};

export default Skill;
