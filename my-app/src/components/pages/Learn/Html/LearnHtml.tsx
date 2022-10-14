import ToggleHtml from '../../../Buttons/ToggleHtml';

import htmlLogo from '../LearnIcons/html-color.svg';
import styles from '../LearnResources.module.css';

const LearnHtml = () => {
  return (
    <div>
      <img className={styles['active-learn-icon']} src={htmlLogo} alt=""></img>
      <ToggleHtml />
    </div>
  );
};
export default LearnHtml;
