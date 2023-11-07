import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List } from './list';

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<List></List>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
