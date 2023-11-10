import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonBack } from './button.back';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given ButtonNewCharacter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <ButtonBack></ButtonBack>
        </Router>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('link');
      expect(element).toBeInTheDocument();
    });
  });
});
