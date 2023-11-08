import '@testing-library/jest-dom';
import { List } from './list';
import { render } from '@testing-library/react';
import { ContextStructure } from '../context/app.contest';
import { Characters } from '../../models/character';

const mockContext: ContextStructure = {
  characterTools: {
    Characters: [{ nombre: 'rick', gender: 'male' }] as unknown as Characters,
  },
};

describe('given the List component', () => {
  describe('wen we initiate ', () => {
    beforeEach(() => {
      render(<List></List>);
    });
    test('is should have cards in him');
  });
});
