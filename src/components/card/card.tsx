import { ButtonDetails } from '../button-details/button.details';
import './card.scss';
import { Character } from '../models/character';

type CharacterProp = {
  character: Character;
};
export function Card({ character }: CharacterProp) {
  let imagenUrl = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;
  return (
    <div className="card">
      <img src={imagenUrl}></img>
      <p>
        <span>{character.name}</span>
        <span>
          <i className="fa-solid fa-venus-mars"></i>
          {character.gender}
        </span>
      </p>
      <ButtonDetails></ButtonDetails>
    </div>
  );
}
