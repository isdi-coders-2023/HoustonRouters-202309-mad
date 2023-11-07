import { Character } from '../models/character';

export class ApiCharacters {
  getAll() {
    throw new Error('Method not implemented.');
  }
  apiUrl: string;
  page: number;
  characterUrl: string;
  constructor(page: number) {
    this.apiUrl = 'https://rickandmortyapi.com/api/character/?page=';
    this.page = page;
    this.characterUrl = this.apiUrl + this.page;
  }

  async getCharacters(): Promise<Character[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
