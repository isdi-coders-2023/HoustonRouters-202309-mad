import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonDetails } from './button.details';

describe('Given ButtonDetails component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ButtonDetails idCharacter={''}></ButtonDetails>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
