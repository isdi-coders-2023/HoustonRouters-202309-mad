import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionsList } from './actions.list';
import { ButtonNextPage } from '../button-next-page/button.next.page';
import { ButtonPreviewPage } from '../button-preview-page/button.preview.page';

jest.mock('../button-next-page/button.next.page');
jest.mock('../button-preview-page/button.preview.page');

describe('Given ActionsList component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ActionsList></ActionsList>);
    });

    test('Then it should be in the document', () => {
      expect(ButtonNextPage).toHaveBeenCalled();
      expect(ButtonPreviewPage).toHaveBeenCalled();
    });
  });
});
