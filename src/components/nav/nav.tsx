import { Link } from 'react-router-dom';
import './nav.scss';

export function Nav() {
  const handleBurgerNavClick = () => {
    const menuMobile = document.querySelector('.menu-mobile') as HTMLElement;
    menuMobile.classList.toggle('active');
  };

  const handleLinkClick = () => {
    const menuMobile = document.querySelector('.menu-mobile') as HTMLElement;
    menuMobile.classList.toggle('active');
  };

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
      <i className="fa-solid fa-bars" onClick={handleBurgerNavClick}></i>
      <ul className="menu-mobile">
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/my-universe" onClick={handleLinkClick}>
            My universe
          </Link>
        </li>
      </ul>
    </>
  );
}
