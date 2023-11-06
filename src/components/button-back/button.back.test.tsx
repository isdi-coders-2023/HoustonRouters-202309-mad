import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonBack } from './button.back';

describe('Given ButtonBack component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ButtonBack></ButtonBack>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
