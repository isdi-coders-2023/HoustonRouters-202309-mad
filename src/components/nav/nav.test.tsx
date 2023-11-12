import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { Nav } from './nav';
import userEvent from '@testing-library/user-event';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <Nav></Nav>
        </Router>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('menu-desktop');
      expect(element).toBeInTheDocument();
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('menu-mobile');
      expect(element).toBeInTheDocument();
    });

    test('Then it should be in the document', async () => {
      const element = screen.getByRole('link-home');
      await userEvent.click(element);
    });

    test('Then it should be in the document', async () => {
      const element = screen.getByRole('i');
      await userEvent.click(element);
    });
  });
});
