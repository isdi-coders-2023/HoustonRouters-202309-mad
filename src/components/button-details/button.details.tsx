import { Link } from 'react-router-dom';
import './button.details.scss';

type Props = {
  idCharacter: string;
};
export function ButtonDetails({ idCharacter }: Props) {
  return (
    <Link to={`/details/${idCharacter}`} className="button-details">
      <i className="fa-solid fa-eye"></i> Details
    </Link>
  );
}
