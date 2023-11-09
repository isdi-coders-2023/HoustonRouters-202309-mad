import { ButtonDetails } from '../button-details/button.details';
import './card.scss';
import { Character } from '../../models/character';

type CharacterProp = {
  character: Character;
};
export function Card({ character }: CharacterProp) {
  return (
    <div className="card">
      <img src={character.image}></img>
      <p>
        <span>{character.name}</span>
        <span>
          <i className="fa-solid fa-venus-mars"></i>
          {character.gender}
        </span>
      </p>
      <ButtonDetails idCharacter={character.id}></ButtonDetails>
    </div>
  );
}
