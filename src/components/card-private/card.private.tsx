import { ButtonDetails } from '../button-details/button.details';
import './card.private.scss';
import { PrivateCharacter } from '../../models/private.character';
import { Link } from 'react-router-dom';

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
      <Link to={`/edit/${privateCharacter.id}`} className="button-edit">
        <i className="fa-solid fa-pencil"></i> Edit
      </Link>
      <button className="button-delete">
        <i className="fa-solid fa-trash"></i> Delete
      </button>
    </div>
  );
}
