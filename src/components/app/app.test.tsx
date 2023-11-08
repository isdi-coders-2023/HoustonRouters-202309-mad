import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';
import { Footer } from '../footer/footer';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppContextProvider } from '../context/app.context.provider';

jest.mock('../footer/footer');
describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContextProvider>
          <Router>
            <App></App>
          </Router>
        </AppContextProvider>
      );
    });
    test('renders App with Footer', () => {
      expect(Footer).toHaveBeenCalled();
    });
  });
});
