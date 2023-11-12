import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListPrivate } from '../../list-private/list.private';

import { ButtonNewCharacter } from '../../button-new-character/button.new.character';
import { Display } from '../../display/display';
import { ActionsList } from '../../actions-list/actions.list';
import MyUniversePage from './my.universe';

jest.mock('../../list-private/list.private');
jest.mock('../../button-new-character/button.new.character');

jest.mock('../../actions-list/actions.list');
jest.mock('../../display/display');

describe('Given  MyUniversePage Component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<MyUniversePage></MyUniversePage>);
    });

    test('renders MyUniversePage with ListPrivate', () => {
      expect(ListPrivate).toHaveBeenCalled();
    });

    test('renders MyUniversePage with Display', () => {
      expect(Display).toHaveBeenCalled();
    });
    test('renders MyUniversePage with ActionsList', () => {
      expect(ActionsList).toHaveBeenCalled();
    });

    test('renders MyUniversePage with ButtonNewCharacter', () => {
      expect(ButtonNewCharacter).toHaveBeenCalled();
    });
  });
});
