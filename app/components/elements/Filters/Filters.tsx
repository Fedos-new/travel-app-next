import { FC, useState } from 'react';
import cn from 'classnames';
import styles from './Filters.module.scss';
import { TypeSetState } from '../../../types/common';
import { IPlace } from '../../../types/place';

const cities = [
  {location: 'Moscow'},
  {location: 'Novosibirsk'},
  {location: 'Irkutsk'},
  {location: 'Vladivostok'},
  {location: 'St. Petersburg'},
  {location: 'Ulan-Ude'},
];

interface IFilters {
  setPlaces: TypeSetState<IPlace[]>;
}

const Filters: FC<IFilters> = ({ setPlaces }) => {
  const [filter, setFilter] = useState('');

  return (
    <div className={styles.wrapper}>
      {cities.map(({location}) => (
          <button
            key={location}
            onClick={() => setFilter(location)}
            className={cn({
              [styles.active]: location === filter
            })}
          >
            {location}
          </button>
        )
      )}
    </div>
  );
}

export default Filters;
