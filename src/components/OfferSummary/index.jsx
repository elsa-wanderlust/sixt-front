import { useState } from "react";
import CarDetailsModal from "../CarDetailsModal";

const OfferSummary = ({ offerDetails, rentalLength }) => {
  const { id, headlines, images, carGroupInfo, prices } = offerDetails;
  const [modalVisible, setModalVisible] = useState(false);

  const handleCarSelect = () => {
    setModalVisible(true);
  };

  return (
    <div onClick={handleCarSelect}>
      <p>{headlines.description}</p>
      <p>{headlines.shortSubline}</p>
      <img src={images.small} alt={`image of a${headlines.description}`} />
      <p>{headlines.mileageInfo}</p>
      <p>€ {prices.dayPrice.amount} jour</p>
      <p>€ {(prices.dayPrice.amount * rentalLength).toFixed(2)} total</p>
      {modalVisible && (
        <CarDetailsModal
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
