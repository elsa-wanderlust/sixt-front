// import from react and package(s)
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import component(s)
import SearchFieldSection from "../components/SearchFieldsSection";
import ConfigurationCard from "../components/ConfigurationCard";
import PricingModal from "../components/PricingModal";
import BasicLink from "../components/BasicLink";
// import function(s)
import dateTimeFormat from "./../utils/dateTimeFormat";
// import dateTimeFormat from "../../utils/dateTimeFormat";

const OfferConfig = ({
  setPage,
  selectedLocation,
  startDate,
  endDate,
  startTime,
  endTime,
}) => {
  // receive the props from the carDetailsModal
  const location = useLocation();
  const offerDetails = location.state[0];
  const offerVeryDetails = location.state[1];
  const totalPrice = location.state[2];
  const rentalLength = location.state[3];
  // declare States
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [displayOptions, setDisplayOptions] = useState(5);
  const [modalVisible, setModalVisible] = useState(false);
  // declare variables
  const pickUpDate = dateTimeFormat(startDate, startTime.value);
  const dropOffDate = dateTimeFormat(endDate, endTime.value);
  // declare functions
  const handleDisplay = () => {
    if (displayOptions === 5) {
      return setDisplayOptions(100);
    } else {
      return setDisplayOptions(5);
    }
  };
  // calc EXTRA FEE - always 'per rental'
  let totalExtraFee = 0;
  for (let i = 0; i < offerVeryDetails.extraFees.length; i++) {
    totalExtraFee += offerVeryDetails.extraFees[i].price.amount;
  }
  // calc ADDITIONAL CHARGES - can be 'daily' or 'per rental'
  let totalAdditionalCharges = 0;
  for (let i = 0; i < offerVeryDetails.additionalCharges.length; i++) {
    if (
      optionsSelected.indexOf(offerVeryDetails.additionalCharges[i].id) !== -1
    ) {
      let multiplier = 0;
      if (
        offerVeryDetails.additionalCharges[i].price.unit === "jour" ||
        offerVeryDetails.additionalCharges[i].price.unit === "jour/unité"
      ) {
        multiplier = rentalLength;
      } else {
        multiplier = 1;
      }
      totalAdditionalCharges +=
        offerVeryDetails.additionalCharges[i].price.amount * multiplier;
    }
  }
  const dailyPrice = Number(
    ((totalPrice - totalExtraFee) / rentalLength).toFixed(2)
  );
  const newTotal =
    dailyPrice * rentalLength + totalExtraFee + totalAdditionalCharges;

  return (
    <div>
      <SearchFieldSection
        setPage={setPage}
        selectedLocation={selectedLocation}
        startDate={startDate}
        endDate={endDate}
        startTime={startTime}
        endTime={endTime}
      />
      <div>
        <img
          src={offerVeryDetails.splashImages[0]}
          alt={`image of a ${offerDetails.headlines.description}`}
        />
        <p>{offerDetails.headlines.description}</p>
        <p>{offerDetails.headlines.longSubline}</p>
      </div>
      <div>
        <section className="leftColumn">
          <div>
            <p>CHOISISSEZ VOTRE PROTECTION ET VOS OPTIONS</p>
          </div>
          <div>
            <p>VOTRE OFFRE INCLUT</p>
            {offerVeryDetails.includedCharges.map((elem) => {
              return <p key={elem.title}>{elem.title}</p>;
            })}
          </div>
          <div>
            <p>CHOISISSEZ VOS OPTIONS</p>
            {offerVeryDetails.additionalCharges.map((elem, index) => {
              if (index < displayOptions) {
                return (
                  <ConfigurationCard
                    key={elem.id}
                    optionDetails={elem}
                    optionsSelected={optionsSelected}
                    setOptionsSelected={setOptionsSelected}
                  />
                );
              }
            })}
          </div>
          <p onClick={handleDisplay}>+ VOIR PLUS D'OPTIONS</p>
          <p onClick={handleDisplay}>- VOIR MOINS D'OPTIONS</p>
        </section>
        <section className="rightColumn">
          <p>TOTAL</p>
          <p>€ {totalPrice}</p>
          <p>Taxes includes</p>
          <p
            onClick={() => {
              setModalVisible(true);
            }}
          >
            Details du prix
          </p>
          <BasicLink
            title="CONTINUER"
            type="linksSelected"
            state={[
              selectedLocation,
              offerDetails,
              pickUpDate,
              dropOffDate,
              optionsSelected,
              offerVeryDetails,
              dailyPrice,
              rentalLength,
              newTotal,
            ]}
            navigate="/personnalDetails"
          />
        </section>
        {modalVisible && (
          <PricingModal
            setModalVisible={setModalVisible}
            totalPrice={totalPrice}
            rentalLength={rentalLength}
            optionsSelected={optionsSelected}
            offerDetails={offerDetails}
            offerVeryDetails={offerVeryDetails}
            dailyPrice={dailyPrice}
            newTotal={newTotal}
          />
        )}
      </div>
    </div>
  );
};

export default OfferConfig;
