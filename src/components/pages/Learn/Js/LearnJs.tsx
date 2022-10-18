import ToggleJs from '../../../buttons/ToggleJs';

import jsLogo from '../LearnIcons/js-color.svg';
import styles from '../LearnResources.module.css';

const LearnJs = () => {
  return (
    <div>
      <img className={styles['active-learn-icon']} src={jsLogo} alt=""></img>
      <ToggleJs />
    </div>
  );
};
export default LearnJs;
