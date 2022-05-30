import Link from 'next/link';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { IPlace } from '../../../../types/place';
import styles from './PopularPlaces.module.scss';
import 'react-loading-skeleton/dist/skeleton.css'

interface IPopularPlaces {
  places: IPlace[];
  isLoading: boolean;
}

const PopularPlaces: FC<IPopularPlaces> = ({places, isLoading}) => {
  if (!isLoading && !places.length) {
    return (
      <div
        style={{
          marginTop: '2rem',
          color: '#e8e8e8',
          opacity: '.6',
          fontStyle: 'italic',
        }}
      >
        Not found!
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <h2>Popular Places</h2>
      {isLoading && (
        <div
          style={{marginTop: '-2rem'}}
        >
          <Skeleton
            count={1}
            height={200}
            borderRadius='20px'
            baseColor='#1b1b1d'
            highlightColor='#2c2c2e'
          />
        </div>
      )}
      {places.length && !isLoading && places.map((place) =>
        <Link href={`/place/${place.slug}`} key={place.slug}>
          <a
            className={styles.item}
            style={{backgroundImage: `url(${place.imagePath})`}}
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
