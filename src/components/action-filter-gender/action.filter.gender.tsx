import { SyntheticEvent, useContext } from 'react';
import { AppContext } from '../context/app.contest';
import './action.filter.gender.scss';
export function ActionFilterGender() {
  const {
    characterTools: { loadCharacters, handleFilterGender },
  } = useContext(AppContext);

  const handleFilterSelectGender = (event: SyntheticEvent) => {
    const filterElementGender = event.target as HTMLSelectElement;
    if (!filterElementGender) throw new Error('No data to filter');

    if (filterElementGender.value === 'all') {
      loadCharacters();
    } else {
      handleFilterGender(filterElementGender.value);
    }
  };

  return (
    <select
      name="gender"
      className="filterGender"
      onChange={handleFilterSelectGender}
    >
      <option selected value="default" disabled>
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
