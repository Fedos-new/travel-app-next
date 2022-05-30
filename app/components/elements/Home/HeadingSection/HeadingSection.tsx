import { FC } from 'react';
import mapImg from '../../../../../assets/images/map.png';
import styles from './HeadingSection.module.scss';

const HeadingSection: FC = () => {
  return (
    <section
      className={styles.section}
      style={{backgroundImage: `url('${mapImg.src}')`}}
    >
      <div>
        <h1>Best places for travel</h1>
      </div>
    </section>
  );
}

export default HeadingSection;
