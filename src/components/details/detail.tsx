import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './detail.scss';
import { AppContext } from '../context/app.contest';

export function Detail() {
  const { id } = useParams();
  const {
    characterTools: { appState },
  } = useContext(AppContext);

  const characterDetails = appState.characters.find((item) => item.id === id);

  const episodes = characterDetails?.episode?.map((item) => {
    const episodeNumber = item.split('/');
    return episodeNumber[episodeNumber.length - 1];
  });

  return (
    <div className="main-detail-container">
      <h2 className="main-title"> Details </h2>

      <div className="details-container">
        <img src={characterDetails?.image} alt="image"></img>
        <ul>
          <li>
            NAME: <span>{characterDetails?.name}</span>
          </li>
          <li>
            STATUS: <span>{characterDetails?.status}</span>
          </li>
          <li>
            SPECIES: <span>{characterDetails?.species}</span>
          </li>
          <li>
            GENDER: <span>{characterDetails?.gender}</span>
          </li>
          <li>
            LAST KNOW LOCATION: <span>{characterDetails?.location.name}</span>
          </li>
          <li>
            ORIGEN: <span>{characterDetails?.origin.name}</span>
          </li>
          <li>
            EPISODES: <span>{episodes?.join(',')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
