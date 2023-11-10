import { Link } from 'react-router-dom';
import './button.back.scss';
export function ButtonBack() {
  return (
    <div className="button-container">
      <Link to="/" className="button-back">
        Back
      </Link>
    </div>
  );
}
