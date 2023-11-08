import { useContext, useEffect } from 'react';
import { Card } from '../card/card';
import './list.scss';
import { AppContext } from '../context/app.contest';

export function List() {
  const {
    characterTools: { appState, loadCharacters },
  } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <section className="list">
      <ul>
        {appState.characters.map((item) => (
          <Card key={item.id} character={item}></Card>
        ))}
      </ul>
    </section>
  );
}
