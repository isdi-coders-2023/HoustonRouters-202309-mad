import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './home';
import { List } from '../../list/list';
import { Actions } from '../../actions/actions';
import { Display } from '../../display/display';
import { ActionsList } from '../../actions-list/actions.list';

jest.mock('../../list/list');
jest.mock('../../actions/actions');
jest.mock('../../actions-list/actions.list');
jest.mock('../../display/display');

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<HomePage></HomePage>);
    });

    test('renders App with List', () => {
      expect(List).toHaveBeenCalled();
    });
    test('renders App with Actions', () => {
      expect(Actions).toHaveBeenCalled();
    });
    test('renders App with Display', () => {
      expect(Display).toHaveBeenCalled();
    });
    test('renders App with ActionsList', () => {
      expect(ActionsList).toHaveBeenCalled();
    });
  });
});
