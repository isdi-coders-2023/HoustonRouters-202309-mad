import '@testing-library/jest-dom';
import { List } from './list';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
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
    test('renders List with Card', () => {});
    const element = screen.getByRole('List');
    expect(element).toBeInTheDocument();
  });
  test('', () => {
    expect(mockContext.characterTools.loadCharacters).toHaveBeenCalled();
    const element = screen.getByText('Rick');
    expect(element).toBeInTheDocument();
  });
});
