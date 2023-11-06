import { Link } from 'react-router-dom';
import ButtonImage from './public/create.new.character.button.png';
import './create.character.buttom.scss';
export function CreateCharacterButton() {
  return (
    <section aria-label="createCharacterButton" className="CreateCharacter">
      <Link to="/formCharacters">
        <button>
          <img src={ButtonImage} alt="Create New Character" />
        </button>
      </Link>
    </section>
  );
}
