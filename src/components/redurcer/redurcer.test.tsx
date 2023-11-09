import { Info } from '../../models/character';
import { characterReducer } from './redurcer';

describe('when reducer', () => {
  test('should load correctly', () => {
    const mockPayload = {
      info: {} as Info,
      results: [],
    };
    const newState = characterReducer(
      {
        info: {
          count: 0,
          pages: 0,
          next: null,
          prev: null,
        },
        results: [],
      },
      {
        type: 'load',
        payload: {
          info: {} as Info,
          results: [],
        },
      }
    );
    expect(newState).toEqual(mockPayload);
  });
  test('should load correctly', () => {
    const mockPayload = {
      info: {} as Info,
      results: [],
    };
    const newState = characterReducer(
      {
        info: {
          count: 0,
          pages: 0,
          next: null,
          prev: null,
        },
        results: [],
      },
      {
        type: 'pageNext',
        payload: {} as Info,
      }
    );
    expect(newState).toMatchObject(mockPayload);
  });
});
