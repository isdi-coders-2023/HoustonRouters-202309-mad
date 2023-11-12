import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../context/app.contest';
import { ListPrivate } from './list.private';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

//
const mockContext: ContextStructure = {
  characterPrivateTools: {
    appPrivateState: {
      results: [{}],
    },
    loadPrivateCharacters: jest.fn().mockResolvedValue([{}]),
  },
} as unknown as ContextStructure;

describe('Given List component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={mockContext}>
          <ListPrivate></ListPrivate>
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
