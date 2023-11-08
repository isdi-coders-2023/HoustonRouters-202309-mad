import '@testing-library/jest-dom';
import { List } from './list';
import { render } from '@testing-library/react';
import { AppContext, ContextStructure } from '../context/app.contest';
import { Character } from '../../models/character';

const mockContext: ContextStructure = {
  characterTools: {
    characters: [{ Nombre: 'Rick' }] as unknown as Character[],
    loadCharacters: jest
      .fn()
      .mockResolvedValue([{ Nombre: 'Bart' } as unknown as Character]),
  },
} as unknown as ContextStructure;

describe('given the List component', () => {
  describe('wen we initiate ', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <List></List>
        </AppContext.Provider>
      );
    });
    test('is should have cards in him');
  });
});
