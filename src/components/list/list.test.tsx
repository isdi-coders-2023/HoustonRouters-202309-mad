import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../context/app.contest';
import { List } from './list';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

const mockContext: ContextStructure = {
  characterTools: {
    appState: {
      characters: [
        {
          results: {},
          info: { count: 1, next: 2 },
        },
      ],
    },
    loadCharacters: jest.fn().mockResolvedValue([]),
  },
} as unknown as ContextStructure;

describe('Given List component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={mockContext}>
          <List></List>
        </AppContext.Provider>
      </MemoryRouter>
    );
  });
  describe('When we instantiate', () => {
    test('renders List with Card', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
