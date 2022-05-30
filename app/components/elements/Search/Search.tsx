import React, { ChangeEvent, FC, useState } from 'react';
import { TypeSetState } from '../../../types/common';
import { IPlace } from '../../../types/place';
import styles from './Search.module.scss';


interface ISearch {
  setPlaces: TypeSetState<IPlace[]>
  initialPlaces: IPlace[]
  setIsLoading: TypeSetState<boolean>
}

const Search: FC<ISearch> = ({ setPlaces, initialPlaces, setIsLoading }) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    const value = e.target.value
    setSearchTerm(value)
    setTimeout(() => {
      if (value) {
        setPlaces(
          initialPlaces.filter(
            place =>
              place.name.toLowerCase().includes(value) ||
              place.location.toLowerCase().includes(value)
          )
        )
      } else {
        setPlaces(initialPlaces)
      }
      setIsLoading(false)
    }, 1500)
  };

  return (
    <div className={styles.search}>
      <span className='material-icons-outlined'>search</span>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search place..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
