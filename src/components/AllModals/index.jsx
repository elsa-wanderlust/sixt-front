// import style
import "./allModals.scss";
// import components
import BookingAllDetails from "../BookingAllDetails.js";
import CarDetailsModal from "../CarDetailsModal";

const AllModals = ({
  page,
  setModalVisible,
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
  confCode,
}) => {
  return (
    <>
      <div
        className="defaultModal-container"
        onClick={() => {
          setModalVisible(false);
        }}
      >
        <div
          className={
            page === "offerConfig" || page === "backOffice" ? "middle" : "small"
          }
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            className="closing-button"
            onClick={() => {
              setModalVisible(false);
            }}
          >
            <p className="iconMedium"></p>
          </button>
          {(page === "offerConfig" || page === "backOffice") && (
            <BookingAllDetails
              page={page}
              setModalVisible={setModalVisible}
              rentalLength={rentalLength}
              optionsSelected={optionsSelected}
              extraFees={extraFees}
              additionalCharges={additionalCharges}
              dailyPrice={dailyPrice}
              total={total}
              vehiculeName={vehiculeName}
              vehiculePicture={vehiculePicture}
              agency={agency}
              pickUpDateDisplay={pickUpDateDisplay}
              dropOffDateDisplay={dropOffDateDisplay}
            />
          )}
          {page === "personalDetails" && (
            <>
              <p>RÉSERVATION CONFIRMÉE</p>
              <p>Voici la référence de votre réservation : {confCode}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default AllModals;
