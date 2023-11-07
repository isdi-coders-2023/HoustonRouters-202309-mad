import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionFilterGender } from './action.filter.gender';

describe('Given ActionFilterStatus component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ActionFilterGender></ActionFilterGender>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
    });
  });
});
