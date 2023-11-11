import { Link } from 'react-router-dom';
import './button.new.character.scss';

export function ButtonNewCharacter() {
  return (
    <section className="action-new-character">
      <Link to="/add" className="link-new-character">
        <i className="fa-solid fa-plus"></i> Create new character
      </Link>
    </section>
  );
}
