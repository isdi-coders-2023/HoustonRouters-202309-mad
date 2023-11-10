import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { FormCharacter } from '../../form/form';
import EditFormPage from './edit.form.page';

jest.mock('../../form/form');
describe('Given EditFormPage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Router>
          <EditFormPage></EditFormPage>
        </Router>
      );
    });
    test('renders EditFormPage in page', () => {
      expect(FormCharacter).toHaveBeenCalled();
    });
  });
});
