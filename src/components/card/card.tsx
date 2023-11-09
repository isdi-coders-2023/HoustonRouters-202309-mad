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
      <p className="character-name">
        <span>{character.name}</span>
      </p>
      <p className="more-info">
        <span>
          <i className="fa-solid fa-venus-mars"></i> {character.gender}
        </span>
        <span className={character.status}>{character.status}</span>
      </p>
      <ButtonDetails idCharacter={String(character.id)}></ButtonDetails>
    </div>
  );
}
