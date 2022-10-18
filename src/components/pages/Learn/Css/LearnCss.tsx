import ToggleCss from '../../../buttons/ToggleCss';

import cssLogo from '../LearnIcons/css-color.svg';
import styles from '../LearnResources.module.css';

const LearnCss = () => {
  return (
    <div>
      <img className={styles['active-learn-icon']} src={cssLogo} alt=""></img>
      <ToggleCss />
    </div>
  );
};
export default LearnCss;
