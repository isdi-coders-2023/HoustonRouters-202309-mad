import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Detail } from './detail';

describe('Given Details component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Detail></Detail>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByText(/Details/i);
      expect(element).toBeInTheDocument();
    });
  });
});
