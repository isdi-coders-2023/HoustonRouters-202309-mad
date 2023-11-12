import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardPrivate } from './card.private';
import { MemoryRouter as Router } from 'react-router-dom';
import { PrivateCharacter } from '../../models/private.character';

describe('Given Card component', () => {
  describe('When we instantiate', () => {
    const privateCharacter: PrivateCharacter = {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      gender: 'Male',
      species: 'Human',
      status: 'Alive',
      origin: origin,
      location: '',
      episode: 'https://rickandmortyapi.com/api/episode/1',

      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    };

    const props = {
      privateCharacter,
    };

    beforeEach(() => {
      render(
        <Router>
          <CardPrivate {...props}></CardPrivate>
        </Router>
      );
    });

    test('Then it should render the character name', () => {
      const element = screen.getByText(privateCharacter.name);
      expect(element).toBeInTheDocument();
    });

    test('Then it should render the character gender', () => {
      const element = screen.getByText(privateCharacter.gender);
      expect(element).toBeInTheDocument();
    });

    test('Then it should render the character image', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute(
        'src',
        `https://rickandmortyapi.com/api/character/avatar/${privateCharacter.id}.jpeg`
      );
    });

    test('Then it should render the ButtonDetails component', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
