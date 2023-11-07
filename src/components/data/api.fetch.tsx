import { Character } from '../models/character';

export class ApiCharacters {
  apiUrl = 'https://rickandmortyapi.com/api/character';

  async getCharacters(): Promise<Character[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
