import { Card } from '../card/card';
import './list.scss';

export function List() {
  return (
    <section className="list">
      <ul>
        <Card></Card>
      </ul>
    </section>
  );
}
