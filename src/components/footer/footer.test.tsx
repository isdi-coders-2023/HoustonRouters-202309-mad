import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Footer></Footer>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });
  });
});
