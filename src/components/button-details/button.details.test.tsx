import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonDetails } from './button.details';
import { MemoryRouter } from 'react-router-dom';

describe('Given ButtonDetails component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/details/123']}>
          <ButtonDetails idCharacter={''}></ButtonDetails>;
        </MemoryRouter>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('link');
      expect(element).toBeInTheDocument();
    });
  });
});
