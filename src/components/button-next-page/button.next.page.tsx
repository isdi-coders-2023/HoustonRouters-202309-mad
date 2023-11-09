import { AppContext } from '../context/app.contest';
import { useContext } from 'react';

export function ButtonNextPage() {
  const {
    characterTools: { handleNext },
  } = useContext(AppContext);

  return (
    <button className="button-preview-page" onClick={handleNext}>
      Next <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
}
