// import from react and package(s)
import { useState } from "react";
// import component(s)
import CarDetailsModal from "../CarDetailsModal";
// import style
import "./offerSummary.scss";

const OfferSummary = ({ offerDetails, rentalLength, setPage }) => {
  const { id, headlines, images, carGroupInfo, prices } = offerDetails;
  const [modalVisible, setModalVisible] = useState(false);

  const handleCarSelect = () => {
    setModalVisible(true);
  };

  const dayPriceInt = prices.dayPrice.amount;
  console.log(typeof dayPriceInt);

  return (
    <div onClick={handleCarSelect} className="oneOffer">
      <p className="offerTitle">{headlines.description.toUpperCase()}</p>
      <p className="offerSubTitle">{headlines.shortSubline}</p>
      <img
        className="offerCarPic"
        src={images.small}
        alt={`image of a${headlines.description}`}
      />
      <p className="mileage">
        <p className="icon iconSmall"></p>
        {headlines.mileageInfo}
      </p>
      <p>€ {prices.dayPrice.amount} jour</p>
      <p>€ {(prices.dayPrice.amount * rentalLength).toFixed(2)} total</p>
      {modalVisible && (
        <CarDetailsModal
          setPage={setPage}
          setModalVisible={setModalVisible}
          offerDetails={offerDetails}
          rentalLength={rentalLength}
          totalPrice={(prices.dayPrice.amount * rentalLength).toFixed(2)}
        />
      )}
    </div>
  );
};

export default OfferSummary;
