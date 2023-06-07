const CarGroupInfo = (carGroupInfo) => {
  const {
    automatic,
    maxPassengers,
    doors,
    driverMinAge,
    airCondition,
    baggage,
  } = carGroupInfo;

  return (
    <div className="allGroupInfos">
      <div className="oneGroupInfo">
        <p className="icon iconSmall"></p>
        <p>{maxPassengers} Sièges</p>
      </div>
      <div className="oneGroupInfo">
        <p className="icon iconSmall"></p>
        <p>{doors} Portes</p>
      </div>
      <div className="oneGroupInfo">
        <p className="icon iconSmall"></p>
        <p>{automatic ? "automatique" : "manuelle"}</p>
      </div>
      <div className="oneGroupInfo">
        <p className="icon iconSmall"></p>
        <p>{baggage} Bagages</p>
      </div>
      {airCondition && (
        <div className="oneGroupInfo">
          <p className="icon iconSmall"></p>
          <p>Climatisation</p>
        </div>
      )}
      <div className="oneGroupInfo">
        <p className="icon iconSmall"></p>
        <p>{driverMinAge} ans </p>
      </div>
    </div>
  );
};

export default CarGroupInfo;
