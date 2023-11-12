import { useEffect } from 'react';
import { PrivateCharacter } from '../../models/private.character';
import { ApiPrivateCharacters } from '../data/api.private.fetch';
import { usePrivateCharacter } from './use.private.character';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn().mockReturnValue([{ results: [] }, jest.fn()]),
}));

describe('Given the ApiPrivateRepo ', () => {
  ApiPrivateCharacters.prototype.getCharacters = jest
    .fn()
    .mockResolvedValue([{ name: 'Rick' } as unknown as PrivateCharacter]);

  beforeEach(async () => {
    const TestComponent = () => {
      const { loadPrivateCharacters } = usePrivateCharacter();

      useEffect(() => {
        loadPrivateCharacters();
      }, [loadPrivateCharacters]);

      return (
        <>
          <h1> Test Private Component </h1>
          <button onClick={loadPrivateCharacters}> Load</button>
        </>
      );
    };

    await act(async () => {
      render(<TestComponent></TestComponent>);
    });
  });

  describe('When the hook is use in a component', () => {
    test('Then it should be in the document', async () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });

    test('Then the loadCharacters should have been called ', async () => {
      const loadElement = screen.getByText('Load');
      await userEvent.click(loadElement);
      expect(ApiPrivateCharacters.prototype.getCharacters).toHaveBeenCalled();
    });
  });
});
