import { FC } from 'react';
import styles from './Filters.module.scss';

const Filters: FC = () => {
  const cities = [
    {location: 'Moscow'},
    {location: 'Novosibirsk'},
    {location: 'Irkutsk'},
    {location: 'Vladivostok'},
  ];

  return (
    <div className={styles.wrapper}>
      {cities.map(({location}) => (
          <button key={location}>{location}</button>
        )
      )}
    </div>
  );
}

export default Filters;
