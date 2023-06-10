// import from react and package(s)
import { useState } from "react";
// import component(s)
import CarDetailsModal from "../CarDetailsModal";
// import style
import "./offerSummary.scss";

// COMPONENT USAGE
// display one offer available from offerList page
const OfferSummary = ({ offerDetails, rentalLength, setPage }) => {
  const { headlines, images, prices } = offerDetails;
  const [modalVisible, setModalVisible] = useState(false);

  const handleCarSelect = () => {
    setModalVisible(true);
  };

  const dayPriceInt = prices.dayPrice.amount.toString().split(".")[0];
  const dayPriceDec = prices.dayPrice.amount
    .toFixed(2)
    .toString()
    .split(".")[1];
  const totalPrice = (prices.dayPrice.amount * rentalLength)
    .toFixed(2)
    .toString()
    .replace(".", ",");

  return (
    <div>
      <div onClick={handleCarSelect} className="oneOffer">
        <p className="offerTitle">{headlines.description.toUpperCase()}</p>
        <p className="offerSubTitle">{headlines.shortSubline}</p>
        <img
          className="offerCarPic"
          src={images.small}
          alt={`image of a${headlines.description}`}
        />
        <div className="mileage">
          <p className="icon iconSmall"></p>
          <p>{headlines.mileageInfo}</p>
        </div>
        <div className="offerPricing">
          <p>€</p>
          <div className="dayPriceFormatted">
            <span className="offerPricingBig">{dayPriceInt}</span>
            <p>{`,${dayPriceDec}`}</p>
          </div>
          <p>jour</p>
        </div>
        <div className="offerPricing black">
          <p>€</p>
          <p>{totalPrice}</p>
          <p>total</p>
        </div>
      </div>
      {modalVisible && (
        <CarDetailsModal
          setPage={setPage}
          setModalVisible={setModalVisible}
          offerDetails={offerDetails}
          rentalLength={rentalLength}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default OfferSummary;
