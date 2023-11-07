import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import AddFormPage from './add.form.page';
import { FormCharacter } from '../../form/form';

jest.mock('../../form/form');
describe('Given AddFormPage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <>
          <Router>
            <AddFormPage></AddFormPage>
          </Router>
        </>
      );
    });
    test('renders AddFormPage in page', () => {
      expect(FormCharacter).toHaveBeenCalled();
    });
  });
});
