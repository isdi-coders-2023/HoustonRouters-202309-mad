import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';
import { Footer } from '../footer/footer';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../footer/footer');
describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <App></App>
        </Router>
      );
    });
    test('renders App with Footer', () => {
      expect(Footer).toHaveBeenCalled();
    });
  });
});
