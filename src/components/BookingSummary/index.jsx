// import from react and package(s)
import { useState } from "react";
import axios from "axios";
// import style
import "./BookingSummary.css";
// import components
import BookingDetailsModal from "../BookingDetailsModal";
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
      <div onClick={displayModal} className="bookingSummary">
        <p>{handleDDMMYYY(dateOfBooking)}</p>
        <p>{confirmationCode}</p>
        <p>{vehicule.name}</p>
        <p>{pickUpDateDisplay}</p>
        <p>{dropOffDateDisplay}</p>
        <p>{client.lastName.toUpperCase()}</p>
        <p>{client.firstName}</p>
        <p>{total}</p>
      </div>
      <p onClick={handleDelete}>delete</p>
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
