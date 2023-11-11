import { ApiPrivateResponse } from '../../models/private.character';

export class ApiPrivateCharacters {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'http://localhost:3000/MyUniverse/';
  }

  async getCharacters(url = this.apiUrl): Promise<ApiPrivateResponse> {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
