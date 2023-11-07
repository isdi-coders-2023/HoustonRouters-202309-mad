import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorPage from './error.page';

describe('Given error page element', () => {
  describe('when we initiate', () => {
    render(<ErrorPage></ErrorPage>);
    test('It should be in the document', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
