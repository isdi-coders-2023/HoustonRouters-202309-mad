export type PrivateGender = 'Male' | 'Female' | 'Genderless' | 'Unknown' | '';
export type PrivateStatus = 'Alive' | 'Dead' | 'Unknown' | '';

export type PrivateCharacter = {
  id: number;
  name: string;
  status: PrivateStatus;
  species: string;
  gender: PrivateGender;
  origin: string;
  location: string;
  image: string;
  episode: string;
  url: string;
  created: string;
};

export type ApiPrivateResponse = {
  results: PrivateCharacter[];
};
