import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailPage from './detail.page';
import { Detail } from '../../details/detail';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../details/detail');
describe('Given DetailPage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <>
          <Router>
            <DetailPage></DetailPage>
          </Router>
        </>
      );
    });
    test('renders Detail with Footer', () => {
      expect(Detail).toHaveBeenCalled();
    });
  });
});
