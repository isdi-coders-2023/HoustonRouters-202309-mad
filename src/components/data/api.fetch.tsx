import { Characters } from '../../models/character';

export class ApiCharacters {
  apiUrl: string;
  page: number;
  characterUrl: string;
  constructor(page: number) {
    this.apiUrl = 'https://rickandmortyapi.com/api/character/?page=';
    this.page = page;
    this.characterUrl = this.apiUrl + this.page;
    console.log(this.characterUrl);
  }

  async getCharacters(): Promise<Characters> {
    const response = await fetch(this.characterUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
