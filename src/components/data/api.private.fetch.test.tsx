import { Character } from '../../models/character';
import { ApiUniverse } from './api.private.fetch';

describe('Given ApiRepo class', () => {
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
      const repo = new ApiUniverse();
      const expected: Character[] = [];
      const result = await repo.getAllPrivate();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });

    test('Then method GetEachPrivate should be used', async () => {
      const repo = new ApiUniverse();
      const expected: Character[] = [];
      const result = await repo.getEachPrivate();
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
    const repo = new ApiUniverse();
    await expect(repo.getAllPrivate()).rejects.toThrow();
  });
});
