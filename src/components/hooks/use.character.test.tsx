import '@testing-library/jest-dom';
import { useEffect, useReducer } from 'react';
import { ApiCharacters } from '../data/api.fetch';
import { Character } from '../../models/character';
import { useCharacter } from './use.character';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppState } from '../redurcer/redurcer';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest
    .fn()
    .mockReturnValue([{ info: { next: '1', prev: '1' } }, jest.fn()]),
}));

describe('Given the ApiRepo ', () => {
  ApiCharacters.prototype.getCharacters = jest
    .fn()
    .mockResolvedValue([{ name: 'Rick' } as unknown as Character]);

  beforeEach(async () => {
    const TestComponent = () => {
      const {
        loadCharacters,
        handleNext,
        handlePrevious,
        handleFilterStatus,
        handleFilterGender,
      } = useCharacter();

      const mockFilterGender = 'Male';
      const mockFilterStatus = 'Alive';

      useEffect(() => {
        loadCharacters();
      }, [loadCharacters]);

      return (
        <>
          <h1> Test Component </h1>
          <button onClick={loadCharacters}> Load</button>
          <button onClick={handleNext}> next</button>
          <button onClick={handlePrevious}> Previous</button>
          <button onClick={() => handleFilterStatus(mockFilterStatus)}>
            {' '}
            Status{' '}
          </button>
          <button onClick={() => handleFilterGender(mockFilterGender)}>
            Gender{' '}
          </button>
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
      expect(ApiCharacters.prototype.getCharacters).toHaveBeenCalled();
    });

    test('Then the handleNext funtion should be executed', async () => {
      let reducer;
      reducer = jest.fn();

      const mockInitialState: AppState = {
        info: { pages: 1, next: '1', prev: '1' },
        results: [{}],
      } as unknown as AppState;

      const buttonNext = screen.getByRole('button', { name: 'next' });
      expect(buttonNext).toBeInTheDocument();
      await userEvent.click(buttonNext);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();
    });

    test('Then the handlePrevious funtion should be executed', async () => {
      let reducer;
      reducer = jest.fn();

      const mockInitialState: AppState = {
        info: { pages: 1, prev: '1', next: '1' },
        results: [{}],
      } as unknown as AppState;

      const buttonPrevious = screen.getByText('Previous');
      expect(buttonPrevious).toBeInTheDocument();
      await userEvent.click(buttonPrevious);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();
    });

    test('Then the filter by Status should be executed', async () => {
      let reducer;
      reducer = jest.fn();

      const mockInitialState: AppState = {
        info: { pages: 1 },
        results: [{}],
      } as unknown as AppState;

      const filterStatus = screen.getByRole('button', { name: 'Status' });
      expect(filterStatus).toBeInTheDocument();
      await userEvent.click(filterStatus);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled();
    });

    test('Then the filter by Gender should be executed', async () => {
      let reducer;
      reducer = jest.fn();

      const mockInitialState: AppState = {
        info: { pages: 1 },
        results: [{}],
      } as unknown as AppState;

      const filterStatus = screen.getByRole('button', { name: 'Gender' });
      expect(filterStatus).toBeInTheDocument();
      await userEvent.click(filterStatus);
      expect(useReducer(reducer, mockInitialState)[1]).toHaveBeenCalled;
    });
  });
});
