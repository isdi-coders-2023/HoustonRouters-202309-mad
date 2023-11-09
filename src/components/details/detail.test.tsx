import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Detail } from './detail';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContext, ContextStructure } from '../context/app.contest';
// import { Character } from '../../models/character';

describe('Given Details component', () => {
  // const characters = [] as unknown as Character[];

  const mockContext: ContextStructure = {
    characterTools: {
      appState: {
        results: [{}],
      },
    },
  } as unknown as ContextStructure;

  beforeEach(() => {
    render(
      <AppContext.Provider value={mockContext}>
        <Router>
          <Detail />
        </Router>
      </AppContext.Provider>
    );
  });
  describe('When we instantiate', () => {
    test('Then it should render the character details', () => {
      const name = screen.getByRole('img');
      expect(name).toBeInTheDocument();
    });
  });
});
