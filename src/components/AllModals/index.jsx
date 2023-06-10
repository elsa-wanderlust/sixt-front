// import from react and package(s)
import { useNavigate } from "react-router-dom";
// import style
import "./allModals.scss";
// import components
import BookingAllDetails from "../BookingAllDetails.js";

// COMPONENT USAGE
// container for most modals (bookings details (offerConfig & backOffice pages) + confirmation code (personalDetails page))
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
  // declare variables and function
  const navigate = useNavigate();
  const handleCloseModal = () => {
    if (page === "personalDetails") {
      setModalVisible(false);
      navigate("/");
    } else {
      setModalVisible(false);
    }
  };

  return (
    <>
      <div className="defaultModal-container" onClick={handleCloseModal}>
        <div
          className={
            page === "offerConfig" || page === "backOffice" ? "middle" : "small"
          }
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button className="closing-button" onClick={handleCloseModal}>
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
