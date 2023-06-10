// import components
import BookingCostItem from "../BookingCostItem";
// import style
import "./bookingAllDetails.scss";

// COMPONENT USAGE
// display all booking details and varies slightly between pages (offerConfig, personalDetails or BackOffice page)
const BookingAllDetails = ({
  page, // which page do we come from? OfferConfig // PersonalDetails // BackOffice
  rentalLength,
  optionsSelected,
  extraFees,
  additionalCharges,
  dailyPrice,
  total,
  vehiculeName,
  vehiculePicture,
  agency,
  pickUpDateDisplay,
  dropOffDateDisplay,
  includedCharges,
  minAge,
}) => {
  return (
    <div className="bookingDetailsContainer">
      {/* VEHICULE, AGENCY, BOOKING DATE - if on personalDetails page or BackOffice page */}
      {page !== "offerConfig" && (
        <section>
          <div>
            <p className="vehiculeName">{vehiculeName}</p>
            <p>{agency}</p>
            <p>
              {pickUpDateDisplay} - {dropOffDateDisplay}
            </p>
          </div>
          <div>
            <img src={vehiculePicture} alt={`image of a ${vehiculeName}`} />
          </div>
        </section>
      )}
      {/* CHARGES INCLUDE AND MIN DRIVER AGE - if on personalDetails page */}
      {page === "personalDetails" && (
        <>
          <h3>VOTRE OFFRE INCLUT</h3>
          {includedCharges.map((elem) => {
            return (
              <div className="includedOffers">
                <p className="iconVerySmall"></p>
                <p key={elem.title}>{elem.title}</p>
              </div>
            );
          })}
          <h3>EXIGENCES POUR LES CONDUCTEURS</h3>
          <p>Conducteur d'âgé au minimum {minAge} ans</p>
        </>
      )}
      {page === "offerConfig" && <h1>DÉTAILS DU PRIX</h1>}
      <h3>PÉRIODE DE LOCATION</h3>
      <BookingCostItem
        title={`Durée de location (${rentalLength} jours x ${dailyPrice})`}
        amount={dailyPrice}
        unit="jour"
        rentalLength={rentalLength}
      />
      <h3>PROTECTION ET OPTIONS</h3>
      {/* if coming from Offer Config => displays if options have been selected OR if cost is at 0*/}
      {additionalCharges.map((elem) => {
        if (
          (page === "offerConfig" &&
            (optionsSelected.indexOf(elem.id) !== -1 ||
              elem.price.amount === 0)) ||
          // if coming from personalDetails or backOffice => displays them all
          page === "backOffice" ||
          page === "personalDetails"
        ) {
          return (
            <BookingCostItem
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
      {extraFees.map((elem) => {
        return (
          <BookingCostItem
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
  );
};
export default BookingAllDetails;
