import { useContext, useEffect } from 'react';
import { Card } from '../card/card';
import './list.scss';
import { AppContext } from '../context/app.contest';

export function List() {
  const {
    characterTools: { Characters, loadCharacters },
  } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  console.log(Characters);
  return (
    <section className="list">
      <ul>
        {Characters.map((item) => (
          <Card key={item.id} character={item}></Card>
        ))}
      </ul>
    </section>
  );
}
