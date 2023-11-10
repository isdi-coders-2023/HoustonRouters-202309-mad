import { characterReducer } from './pivate.reducer';

describe('when reducer', () => {
  test('should load correctly', () => {
    const mockPayload = {
      private: [],
    };
    const newState = characterReducer(
      {
        private: [],
      },
      {
        type: 'create',
        payload: {
          private: [],
        },
      }
    );
    expect(newState).toEqual(mockPayload);
  });
});
