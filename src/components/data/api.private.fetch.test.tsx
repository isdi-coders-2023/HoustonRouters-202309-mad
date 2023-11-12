import { Character } from '../../models/character';
import { ApiPrivateCharacters } from './api.private.fetch';

describe('Given ApiPrivateCharacters class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValueOnce({ results: [] });
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then method GetAllPrivate should be used', async () => {
      const repo = new ApiPrivateCharacters();
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
    const repo = new ApiPrivateCharacters();
    await expect(repo.getCharacters()).rejects.toThrow();
  });
});
