import ToggleReact from '../../../buttons/ToggleReact';

import reactLogo from '../LearnIcons/react-color.svg';
import styles from '../LearnResources.module.css';

const LearnReact = () => {
  return (
    <div>
      <img className={styles['active-learn-icon']} src={reactLogo} alt=""></img>
      <ToggleReact />
    </div>
  );
};
export default LearnReact;
