import { useContext } from 'react';
import { AppContext } from '../context/app.contest';
import './action.filter.status.scss';
export function ActionFilterStatus() {
  const {
    characterTools: { handleFilterStatus },
  } = useContext(AppContext);

  return (
    <select
      name="status"
      className="filterStatus"
      onChange={handleFilterStatus}
    >
      <option value="default" disabled>
        Filter by status
      </option>
      <option value="all">All</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}
