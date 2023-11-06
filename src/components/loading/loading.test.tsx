import { Loading } from './loading';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Given a Loading component', () => {
  describe('When is render', () => {
    test('Then it should show `Logo loading page`', () => {
      const expectedAltText = 'Logo loading page';
      const exceptedImage = './portal-rick-and-morty.gif';

      render(<Loading></Loading>);

      const loadImage = screen.getByAltText(expectedAltText);
      expect(loadImage).toHaveAttribute('src', exceptedImage);
    });
  });
});
