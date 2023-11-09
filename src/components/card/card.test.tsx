import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';
import { Character } from '../../models/character';
import { Location } from '../../models/location';
import { MemoryRouter as Router } from 'react-router-dom';
import { Origin } from '../../models/origin';

describe('Given Card component', () => {
  describe('When we instantiate', () => {
    const location: Location = {
      id: '1',
      name: 'Earth (C-137)',
      type: 'Planet',
      dimension: 'Dimension C-137',
      residents: [
        'https://rickandmortyapi.com/api/character/38',
        'https://rickandmortyapi.com/api/character/45',
      ],
      url: 'https://rickandmortyapi.com/api/location/1',
      created: '2017-11-10T12:42:04.162Z',
    };

    const origin: Origin = {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    };

    const character: Character = {
      id: '1',
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      gender: 'Male',
      species: 'Human',
      status: 'Alive',
      origin: origin,
      location: location,
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    };

    const props = {
      character,
    };

    beforeEach(() => {
      render(
        <Router>
          <Card {...props}></Card>
        </Router>
      );
    });

    test('Then it should render the character name', () => {
      const element = screen.getByText(character.name);
      expect(element).toBeInTheDocument();
    });

    test('Then it should render the character gender', () => {
      const element = screen.getByText(character.gender);
      expect(element).toBeInTheDocument();
    });

    test('Then it should render the character image', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute(
        'src',
        `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`
      );
    });

    test('Then it should render the ButtonDetails component', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
