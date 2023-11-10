import { Character } from '../../models/character';

export class ApiUniverse {
  serverUrl: string;
  constructor() {
    this.serverUrl = 'http://localhost:3000/universe';
  }

  async getAllPrivate(): Promise<Character[]> {
    const response = await fetch(this.serverUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const rickList = await response.json();
    return rickList.results;
  }

  async getEachPrivate() {
    const rickContainer = [];
    const response = await fetch(this.serverUrl);
    const rickList = await response.json();
    const rickDataContainer = await Promise.all(
      rickList.results.map(async (character: { url: string }) => {
        const eachUrl = character.url;
        const response = await fetch(eachUrl);
        const rickData = await response.json();
        return rickData;
      })
    );
    for (let offset = 0; offset < rickDataContainer.length; offset + 20) {
      rickContainer.push(rickDataContainer.splice(offset, 20));
    }

    return rickContainer;
  }
}
