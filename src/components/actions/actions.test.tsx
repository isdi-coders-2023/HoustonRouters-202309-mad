import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Actions } from './actions';

jest.mock('../action-filter-gender/action.filter.gender');
jest.mock('../action-filter-status/action.filter.status');

describe('Given Actions component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Actions></Actions>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('generic');
      expect(element).toBeInTheDocument();
    });
  });
});
