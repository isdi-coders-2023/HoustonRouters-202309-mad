import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonPreviewPage } from './button.preview.page';

describe('Given ButtonPreviewPage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ButtonPreviewPage></ButtonPreviewPage>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
