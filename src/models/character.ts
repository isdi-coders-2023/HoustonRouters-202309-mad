import { Origin } from './origin';
import { Location } from './location';

export type Gender = 'Male' | 'Female' | 'Genderless' | 'Unknown';
export type Status = 'Alive' | 'Dead' | 'Unknown';

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  gender: Gender;
  origin: Origin;
  location?: Location;
  image: string;
  episode?: string[];
  url: string;
  created?: string;
};

export type Info = {
  count: number;
  pages: number;
  next: 'string' | null;
  prev: 'string' | null;
};

export type ApiPrivate = {
  pages: number;
  next: 'string' | null;
  prev: 'string' | null;
  id: number;
  name: string;
  status: Status;
  species: string;
  gender: Gender;
  origin: string;
  location: string;
  image: string;
  url: string;
};

//FETCH ALL CHARACTERS
export type ApiResponse = {
  info: Info;
  results: Character[];
};
