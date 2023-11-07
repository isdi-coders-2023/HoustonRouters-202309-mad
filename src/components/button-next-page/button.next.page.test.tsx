import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonNextPage } from './button.next.page';

describe('Given ButtonNextPage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ButtonNextPage></ButtonNextPage>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
