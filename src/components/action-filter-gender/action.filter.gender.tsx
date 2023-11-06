import './action.filter.gender.scss';
export function ActionFilterGender() {
  return (
    <>
      <select className="filterGender">
        <option selected disabled>
          Filter by gender
        </option>
        <option value="all">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </>
  );
}
