import { useContext } from 'react';
import { AppContext } from '../context/app.contest';
import './action.filter.gender.scss';
export function ActionFilterGender() {
  const {
    characterTools: { handleFilterGender },
  } = useContext(AppContext);

  return (
    <select
      name="gender"
      className="filterGender"
      onChange={handleFilterGender}
    >
      <option value="default" disabled>
        Filter by gender
      </option>
      <option value="all">All</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">unknown</option>
    </select>
  );
}
