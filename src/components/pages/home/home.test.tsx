import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import HomePage from './home';
import { Display } from '../../display/display';
import { AppContextProvider } from '../../context/app.context.provider';

jest.mock('../../display/display');
describe('Given HomePage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContextProvider>
          <Router>
            <HomePage></HomePage>
          </Router>
        </AppContextProvider>
      );
    });
    test('renders Display in page', () => {
      expect(Display).toHaveBeenCalled();
    });
  });
});
