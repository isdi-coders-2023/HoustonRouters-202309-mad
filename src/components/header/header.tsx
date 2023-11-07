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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">My universe</a>
        </li>
      </ul>
      <i className="fa-solid fa-bars"></i>
    </header>
  );
}
