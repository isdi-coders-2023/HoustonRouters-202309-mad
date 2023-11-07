import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonNewCharacter } from '../button-new-character/button.new.character';

describe('Given ButtonNewCharacter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ButtonNewCharacter></ButtonNewCharacter>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
