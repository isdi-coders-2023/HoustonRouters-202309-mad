import { ActionFilterGender } from '../action-filter-gender/action.filter.gender';
import { ActionFilterStatus } from '../action-filter-status/action.filter.status';
import './actions.scss';

export function Actions() {
  return (
    <section className="actions">
      <ActionFilterStatus></ActionFilterStatus>
      <ActionFilterGender></ActionFilterGender>
    </section>
  );
}
