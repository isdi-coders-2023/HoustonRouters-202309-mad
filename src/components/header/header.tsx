import './header.scss';
import { Nav } from '../nav/nav';

export function Header() {
  return (
    <header className="header">
      <div className="logo-title">
        <img src="/img/logo.png"></img>
        <h1>Rick & Morty</h1>
      </div>
      <Nav></Nav>
    </header>
  );
}
