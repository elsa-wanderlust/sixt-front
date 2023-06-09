// import style
import "./pricingModal.scss";
// import components
import PricingModalItem from "../PricingModalItem";

const PricingModal = ({
  origin, // which page do we come from? offerConfig or backOffice
  setModalVisible,
  rentalLength,
  optionsSelected,
  pricingDetails,
  dailyPrice,
  total,
  vehicule,
  agency,
  pickUpDateDisplay,
  dropOffDateDisplay,
}) => {
  return (
    <>
      <div
        className="pricingModal-container"
        onClick={() => {
          setModalVisible(false);
        }}
      >
        <div
          className="modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {origin === "backOffice" && (
            <div>
              <p>{vehicule.name}</p>
              <img src={vehicule.picture} alt={`image of a ${vehicule.name}`} />
              <p>
                {pickUpDateDisplay}-{dropOffDateDisplay}
              </p>
              <p>{agency}</p>
            </div>
          )}
          {/* {origin !== "backOffice" && ( */}
          <button
            className="closing-button"
            onClick={() => {
              setModalVisible(false);
            }}
          >
            <p className="iconMedium"></p>
          </button>
          {/* )} */}
          <h1>DÉTAILS DU PRIX</h1>
          <h3>PÉRIODE DE LOCATION</h3>
          <PricingModalItem
            title={`Durée de location (${rentalLength} jours x ${dailyPrice})`}
            amount={dailyPrice}
            unit="jour"
            rentalLength={rentalLength}
          />
          <h3>PROTECTION ET OPTIONS</h3>
          {/* if coming from Offer Config => displays if options have been selected OR if cost is at 0*/}
          {pricingDetails.additionalCharges.map((elem) => {
            if (
              (origin === "offerConfig" &&
                (optionsSelected.indexOf(elem.id) !== -1 ||
                  elem.price.amount === 0)) ||
              // if coming from backOffice => displays them all
              origin === "backOffice"
            ) {
              return (
                <PricingModalItem
                  key={elem.title}
                  title={elem.title}
                  amount={elem.price.amount}
                  unit={elem.price.unit}
                  rentalLength={rentalLength}
                />
              );
            }
          })}

          <h3>FRAIS</h3>
          {pricingDetails.extraFees.map((elem) => {
            return (
              <PricingModalItem
                key={elem.title}
                title={elem.title}
                amount={elem.price.amount}
                unit={elem.price.unit}
                rentalLength={rentalLength}
              />
            );
          })}
          <div className="totalSection">
            <div>
              <div>
                <h3>TOTAL</h3>
              </div>
              <div>
                <p>€</p>
                <h2>{total.toFixed(2).toString().replace(".", ",")}</h2>
              </div>
            </div>
            <p className="tax">Taxes incluses</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingModal;
