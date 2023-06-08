// import from react and package(s)
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import style
import "./BookingSummary.scss";
// import components
import PricingModal from "../PricingModal";
// import functions
import calcRentalLength from "../../utils/calcRentalLength";
import dateForDisplay from "../../utils/dateforDisplay";
import handleDDMMYYY from "../../utils/handleDDMMYYYY";
import calcExtraFee from "../../utils/calcExtraFee";
import calcAdditionalCharges from "../../utils/calcAdditionalCharges";
import calcDailyPrice from "../../utils/calcDailyPrice";
import calcTotal from "../../utils/calcTotal";

const BookingSummary = ({ bookingDetails, setRefresh }) => {
  // declare variables for booking details
  const {
    client,
    agency,
    vehicule,
    bookingDate,
    cost,
    dateOfBooking,
    confirmationCode,
    _id,
  } = bookingDetails;
  const rentalLength = calcRentalLength(
    bookingDate.pickUpDate,
    bookingDate.dropOffDate
  );
  const totalExtraFee = calcExtraFee(cost);
  const totalAdditionalCharges = calcAdditionalCharges(cost, rentalLength);
  const dailyPrice = calcDailyPrice({
    origin: "backOffice",
    totalExtraFee,
    rentalLength,
    dayPrice: cost.dayPrice,
  });
  const total = calcTotal(
    dailyPrice,
    rentalLength,
    totalExtraFee,
    totalAdditionalCharges
  );
  const pickUpDateDisplay = dateForDisplay(bookingDate.pickUpDate);
  const dropOffDateDisplay = dateForDisplay(bookingDate.dropOffDate);

  // declare state and function for modal
  const [modalVisible, setModalVisible] = useState(false);
  const displayModal = () => {
    setModalVisible(true);
  };
  // declare delete function
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/booking/delete/${_id}`
      );
      setRefresh((current) => !current);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="bookingSummary">
      <div onClick={displayModal} className="clickableArea">
        <p className="date">{handleDDMMYYY(dateOfBooking)}</p>
        <p className="code">{confirmationCode}</p>
        <p className="vehicule">{vehicule.name}</p>
        <div className="dates">
          <p>{pickUpDateDisplay} -</p>
          <p>{dropOffDateDisplay}</p>
        </div>
        <div className="client">
          <p>{client.lastName.toUpperCase()}</p>
          <p>{` ${client.firstName}`}</p>
        </div>
        <p className="total">€{total.toFixed(2)}</p>
      </div>
      <div onClick={handleDelete} className="delete">
        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
      </div>

      {modalVisible && (
        <PricingModal
          origin="backOffice"
          setModalVisible={setModalVisible}
          rentalLength={rentalLength}
          pricingDetails={cost}
          dailyPrice={dailyPrice}
          total={total}
          vehicule={vehicule}
          agency={agency}
          pickUpDateDisplay={pickUpDateDisplay}
          dropOffDateDisplay={dropOffDateDisplay}
        />
      )}
    </div>
  );
};
export default BookingSummary;
