import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonNextPage } from './button.next.page';
import { Route } from 'react-router-dom';

describe('Given ButtonNextPage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Route>
          <ButtonNextPage></ButtonNextPage>
        </Route>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
