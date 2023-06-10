// import style
import "./carGroupInfo.scss";

// COMPONENT USAGE
// display info about  doors, seats, transmission, min age, AC and luggages (both carDetailsModal and offerConfig page)
const CarGroupInfo = ({ carGroupInfo, type }) => {
  const {
    automatic,
    maxPassengers,
    doors,
    driverMinAge,
    airCondition,
    baggage,
  } = carGroupInfo;
  return (
    <div className={`allGroupInfo ${type}`}>
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
        <p>{automatic ? "Automatique" : "Manuelle"}</p>
      </div>
      <div className="oneGroupInfo">
        <p className="icon iconSmall"></p>
        <p>
          {baggage} Bagage{baggage > 1 && "s"}
        </p>
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
