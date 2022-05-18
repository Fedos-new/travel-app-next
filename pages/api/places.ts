import { IPlace } from '../../app/types/place';
import moscow from '../../assets/images/moscow.jpg';
import nsk from '../../assets/images/nsk.jpg';
import { NextApiRequest, NextApiResponse } from 'next';

const places: IPlace[] = [
  {
    name: "Moscow",
    location: "Russia",
    imagePath: moscow.src,
    description: "Capital of Russia",
    rating: 5,
    duration: '5 days',
    distance: 3358,
    googleMapLink: 'sdfdsvsdvsdcec',
    mapImage: 'dfdfdsfsd',
  },
  {
    name: "Novosibirsk",
    location: "Russia",
    imagePath: nsk.src,
    description: "Capital of Siberia",
    rating: 3,
    duration: '0 days',
    distance: 0,
    googleMapLink: 'grgrgrg',
    mapImage: 'dfdfdvsfsd',
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places)
}
