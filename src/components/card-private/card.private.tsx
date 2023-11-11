import { ButtonDetails } from '../button-details/button.details';
import './card.private.scss';
import { PrivateCharacter } from '../../models/private.character';

type Props = {
  privateCharacter: PrivateCharacter;
};
export function CardPrivate({ privateCharacter }: Props) {
  return (
    <div className="card">
      <img src={privateCharacter.image}></img>
      <p className="character-name">
        <span>{privateCharacter.name}</span>
      </p>
      <p className="more-info">
        <span>
          <i className="fa-solid fa-venus-mars"></i> {privateCharacter.gender}
        </span>
        <span className={privateCharacter.status}>
          {privateCharacter.status}
        </span>
      </p>
      <ButtonDetails idCharacter={String(privateCharacter.id)}></ButtonDetails>
    </div>
  );
}
