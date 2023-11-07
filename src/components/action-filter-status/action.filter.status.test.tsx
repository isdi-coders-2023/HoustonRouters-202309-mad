import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionFilterStatus } from './action.filter.status';

describe('Given ActionFilterStatus component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ActionFilterStatus></ActionFilterStatus>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
    });
  });
});
