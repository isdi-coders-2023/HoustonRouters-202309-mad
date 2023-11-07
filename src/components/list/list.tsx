import { Card } from '../card/card';
import { ApiCharacters } from '../data/api.fetch';
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
