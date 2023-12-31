import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { Header } from './header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <Header></Header>
        </Router>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
