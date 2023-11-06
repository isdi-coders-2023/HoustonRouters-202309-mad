export function Detail() {
  return (
    <>
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
            ORIGEN:<span></span>
          </p>
          <p>
            IMAGE:<span></span>
          </p>
          <p>
            EPISODES:<span></span>
          </p>
          <p>
            LAST KNOW LOCATION:<span></span>
          </p>
        </div>
      </div>

      <div className="button-container">
        <button className="button-back"> Back</button>
      </div>
    </>
  );
}
