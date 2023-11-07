import { ApiCharacters } from "./api.fetch";


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
    test('Then metod  GetCharacters shoul be used', ()=>{
      const repo = new ApiCharacters();
      const expected: Characters[] = []
       const result = await repo.GetCharacters()
        expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
        });
      });
    });
  });
});
