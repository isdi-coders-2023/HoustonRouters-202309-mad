import { useContext, useEffect } from 'react';
import './list.private.scss';
import { AppContext } from '../context/app.contest';
import { CardPrivate } from '../card-private/card.private';

export function ListPrivate() {
  const {
    characterPrivateTools: { appPrivateState, loadPrivateCharacters },
  } = useContext(AppContext);

  useEffect(() => {
    loadPrivateCharacters();
  }, [loadPrivateCharacters]);

  return (
    <section className="list">
      <ul>
        {appPrivateState.results.map((item) => (
          <CardPrivate key={item.id} privateCharacter={item}></CardPrivate>
        ))}
      </ul>
    </section>
  );
}
