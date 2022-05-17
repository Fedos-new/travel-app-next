export interface IPlace {
  name: string;
  location: string;
  imagePath: string;
  description: string;
  rating: 1 | 2 | 3 | 4 | 5;
  duration: string;
  distance: number;
  googleMapLink: string;
  mapImage?: string;
}


