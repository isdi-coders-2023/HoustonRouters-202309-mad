import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import HomePage from './home';
import { Display } from '../../display/display';

jest.mock('../../display/display');
describe('Given HomePage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <HomePage></HomePage>
        </Router>
      );
    });
    test('renders Display in page', () => {
      expect(Display).toHaveBeenCalled();
    });
  });
});
