import './action.filter.status.scss';
export function ActionFilterStatus() {
  return (
    <select name="status" className="filterStatus">
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
