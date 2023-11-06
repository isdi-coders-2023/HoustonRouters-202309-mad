import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Display } from './display';

describe('Given Display component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Display></Display>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
