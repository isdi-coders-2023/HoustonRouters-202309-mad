import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonNewCharacter } from './button.new.character';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given ButtonBack component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <ButtonNewCharacter></ButtonNewCharacter>
        </Router>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('link');
      expect(element).toBeInTheDocument();
    });
  });
});
