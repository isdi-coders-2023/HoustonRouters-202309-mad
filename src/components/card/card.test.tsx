import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';

describe('Given Card component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Card></Card>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
