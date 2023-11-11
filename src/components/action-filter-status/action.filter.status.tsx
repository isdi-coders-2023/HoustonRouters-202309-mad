import { SyntheticEvent, useContext } from 'react';
import { AppContext } from '../context/app.contest';
import './action.filter.status.scss';
export function ActionFilterStatus() {
  const {
    characterTools: { loadCharacters, handleFilterStatus },
  } = useContext(AppContext);

  const handleFilterSelectStatus = (event: SyntheticEvent) => {
    const filterElementStatus = event.target as HTMLSelectElement;
    if (!filterElementStatus) throw new Error('No data to filter');

    if (filterElementStatus.value === 'all') {
      loadCharacters();
    } else {
      handleFilterStatus(filterElementStatus.value);
    }
  };

  return (
    <select
      name="status"
      className="filterStatus"
      onChange={handleFilterSelectStatus}
    >
      <option selected value="default" disabled>
        Filter by status
      </option>
      <option value="all">All</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}
