import styles from './SearchBar.module.scss';
import { FC } from 'react';
import Search from '../../Search/Search';
import Filters from '../../Filters/Filters';
import mapImg from '../../../../../assets/images/map.png';

const SearchBar: FC = () => {
  return (
    <section className={styles.section}
             style={{backgroundImage: `url('${mapImg.src}')`}}>
      <div>
        <h1>Best places fro travel</h1>
        <Search/>
        <Filters/>
      </div>
    </section>
  );
}

export default SearchBar;
