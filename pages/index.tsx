import styles from '../assets/styles/Home.module.css'
import Layout from '../app/components/common/Layout';
import { GetStaticProps, NextPage } from 'next';
import { IPlace } from '../app/types/place';
import SearchBar from '../app/components/elements/Home/SearchBar/SearchBar';

interface IHome {
  places: IPlace[];
}

const Home: NextPage<IHome> = ({places}) => {
  return (
    <Layout style={styles.container}>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <SearchBar/>
        {places.map((place) =>
          <div key={place.name}>
            {place.name}
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/places')
  const places = await response.json();

  return {
    props: {
      places
    }
  }
}


export default Home;
