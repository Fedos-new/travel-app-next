import { IPlace } from '../../app/types/place';
import { NextApiRequest, NextApiResponse } from 'next';
import { PATH_IMAGES } from '../../app/constants/hosts';


const places: IPlace[] = [
  {
    slug: "moscow",
    name: "Moscow",
    location: "Russia",
    imagePath: `${PATH_IMAGES}/moscow.jpg`,
    description: "Capital of Russia",
    rating: 5,
    duration: '5 days',
    distance: 3358,
    googleMapLink: 'sdfdsvsdvsdcec',
    mapImage: 'dfdfdsfsd',
  },
  {
    slug: "novosibirsk",
    name: "Novosibirsk",
    location: "Russia",
    imagePath: `${PATH_IMAGES}/nsk.jpg`,
    description: "Capital of Siberia",
    rating: 3,
    duration: '0 days',
    distance: 0,
    googleMapLink: 'grgrgrg',
    mapImage: 'dfdfdvsfsd',
  },
  {
    slug: "irkutsk",
    name: "Irkutsk",
    location: "Russia",
    imagePath: `${PATH_IMAGES}/irkutsk.jpg`,
    description: "City near Baikal",
    rating: 3,
    duration: '2 days',
    distance: 0,
    googleMapLink: 'grgrgrg',
    mapImage: 'dfdfdvsfsd',
  },
  {
    slug: "vladivostok",
    name: "Vladivostok",
    location: "Russia",
    imagePath: `${PATH_IMAGES}/vladivostok.jpg`,
    description: "Eastern city",
    rating: 4,
    duration: '4 days',
    distance: 0,
    googleMapLink: 'grgrgrg',
    mapImage: 'dfdfdvsfsd',
  },
  {
    slug: "stPetersburg",
    name: "St.Petersburg",
    location: "Russia",
    imagePath: `${PATH_IMAGES}/st.petersburg.jpg`,
    description: "Cultural Capital of Russia",
    rating: 5,
    duration: '5 days',
    distance: 0,
    googleMapLink: 'grgrgrg',
    mapImage: 'dfdfdvsfsd',
  },
  {
    slug: "ulanUde",
    name: "Ulan-Ude",
    location: "Russia",
    imagePath: `${PATH_IMAGES}/ulan-ude.jpg`,
    description: "The Republic of Buryatia",
    rating: 2,
    duration: '0 days',
    distance: 0,
    googleMapLink: 'grgrgrg',
    mapImage: 'dfdfdvsfsd',
  }
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places)
}
