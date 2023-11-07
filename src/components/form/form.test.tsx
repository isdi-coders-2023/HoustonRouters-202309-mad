import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormCharacter } from './form';


describe('Given FormCharacter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<FormCharacter></FormCharacter>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('form');
      expect(element).toBeInTheDocument();
    });
  });
});
