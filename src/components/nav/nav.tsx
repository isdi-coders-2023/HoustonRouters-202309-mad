import { Link } from 'react-router-dom';
import './nav.scss';

export function Nav() {
  return (
    <>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/my-universe">My universe</Link>
        </li>
      </ul>
      <i className="fa-solid fa-bars"></i>
    </>
  );
}
