export type Gender = 'Male' | 'Female' | 'Genderless' | 'Unknown';
export type Status = 'Alive' | 'Dead' | 'Unknown';

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Info = {
  count: number;
  pages: number;
  next: 'string' | null;
  prev: 'string' | null;
};

//FETCH ALL CHARACTERS
export type Characters = {
  info: Info;
  results: Character[];
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
export type Origin = {
  name: string;
  url: string;
};
