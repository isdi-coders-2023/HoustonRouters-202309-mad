import { Info } from '../../models/character';
import { characterReducer } from './redurcer';
import {AppState} from './redurcer'

describe('when reducer', () => {
  test('should recuce correctly', () => {
    const mockPayload = {
      info: {} as Info,
      results: [],
    };
  });
  const newState = characterReducer(
    {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      },
    },
    {
      type: 'load',
      payload: 
    }
  );
});
