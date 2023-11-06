import { Link } from 'react-router-dom';
import './header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="logo-title">
        <img src="/img/logo.png"></img>
        <h1>Rick & Morty</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/my-universe">My universe</Link>
        </li>
      </ul>
      <i className="fa-solid fa-bars"></i>
    </header>
  );
}
