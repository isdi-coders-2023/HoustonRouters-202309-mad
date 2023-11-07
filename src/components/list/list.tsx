import { Card } from '../card/card';
import './list.scss';

export function List() {
  return (
    <section className="list">
      <ul>
        <Card
          character={{
            id: 0,
            name: '',
            status: 'Alive',
            species: '',
            gender: 'Unknown',
            origin: {
              name: '',
              url: '',
            },
            location: {
              id: 0,
              name: '',
              type: '',
              dimension: '',
              residents: [],
              url: '',
              created: '',
            },
            image: '',
            episode: [],
            url: '',
            created: '',
          }}
        ></Card>
      </ul>
    </section>
  );
}
