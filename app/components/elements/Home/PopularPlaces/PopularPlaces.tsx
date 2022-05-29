import Link from 'next/link';
import React, { FC } from 'react';
import { IPlace } from '../../../../types/place';
import styles from './PopularPlaces.module.scss';

interface IPopularPlaces {
  places: IPlace[];
}

const PopularPlaces: FC<IPopularPlaces> = ({places}) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular Places</h2>
      {places.map((place) =>
        <Link href={`/place/${place.slug}`} key={place.slug}>
          <a
            className={styles.item}
            style={{ backgroundImage: `url(${place.imagePath})` }}
          >
						<span className={styles.heading}>
							{place.name + ', ' + place.location}
						</span>
          </a>
        </Link>
      )}
    </div>
  );
}

export default PopularPlaces;
