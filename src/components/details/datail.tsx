import { ButtonBack } from '../button-back/button.back';

export function Detail() {
  return (
    <>
      <div className="main-detail-container">
        <h2 className="main-title"> Details </h2>

        <div className="details-container">
          <div className="image-details"></div>

          <div className="details-container-items">
            <p>
              NAME: <span></span>
            </p>
            <p>
              STATUS: <span></span>
            </p>
            <p>
              SPECIES:<span></span>
            </p>
            <p>
              GENDER:<span></span>
            </p>
            <p>
              LAST KNOW LOCATION:<span></span>
            </p>
            <p>
              ORIGEN:<span></span>
            </p>
            <p>
              IMAGE:<span></span>
            </p>
            <p>
              EPISODES:<span></span>
            </p>
          </div>
        </div>
        <ButtonBack></ButtonBack>
      </div>
    </>
  );
}
