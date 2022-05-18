import styles from '../assets/styles/Home.module.css'
import Layout from '../app/components/common/Layout';
import { GetStaticProps, NextPage } from 'next';
import { IPlace } from '../app/types/place';

interface IHome {
  places: IPlace[];
}

const Home: NextPage<IHome> = ({places}) => {
  return (
    <Layout className={styles.container}>
      {places.map((place) =>
        <div key={place.name}>
          {place.name}
        </div>
      )}
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
