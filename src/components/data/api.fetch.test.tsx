import { Character } from '../../models/character';
import { ApiCharacters } from './api.fetch';

describe('Given ApiRepo class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then metod  GetCharacters shoul be used', async () => {
      const repo = new ApiCharacters();
      const expected: Character[] = [];
      const result = await repo.getCharacters();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
});

describe('When we instantiate it and response is bad', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    });
  });
  test('Then method getCountry should throw an error', async () => {
    const repo = new ApiCharacters();
    await expect(repo.getCharacters()).rejects.toThrow();
  });
});
