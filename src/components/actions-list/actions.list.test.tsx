import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionsList } from './actions.list';

describe('Given ActionsList component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ActionsList></ActionsList>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });
  });
});
