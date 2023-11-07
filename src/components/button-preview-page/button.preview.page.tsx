import { AppContext } from '../context/app.contest';
import { useContext } from 'react';

export function ButtonPreviewPage() {
  const {
    characterTools: { handlePrevious },
  } = useContext(AppContext);

  return (
    <button className="button-preview-page" onClick={handlePrevious}>
      <i className="fa-solid fa-arrow-left"></i> Back
    </button>
  );
}
