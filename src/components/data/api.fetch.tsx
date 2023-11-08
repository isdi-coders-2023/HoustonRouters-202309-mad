import { ApiResponse } from '../../models/character';

export class ApiCharacters {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'https://rickandmortyapi.com/api/character/';
  }

  async getCharacters(url = this.apiUrl): Promise<ApiResponse> {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
