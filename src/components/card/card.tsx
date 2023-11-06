import { ButtonDetails } from '../button-details/button.details';
import './card.scss';
export function Card() {
  return (
    <div className="card">
      <img src="/img/sample.png"></img>
      <p>
        <span>Name</span>
        <span>
          <i className="fa-solid fa-venus-mars"></i>Gender
        </span>
      </p>
      <ButtonDetails></ButtonDetails>
    </div>
  );
}
