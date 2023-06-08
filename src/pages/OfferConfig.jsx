// import from react and package(s)
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import style
import "../styles/offerConfig.scss";
// import component(s)
import SearchFieldSection from "../components/SearchFieldsSection";
import ConfigurationCard from "../components/ConfigurationCard";
import PricingModal from "../components/PricingModal";
import BasicLink from "../components/BasicLink";
import SelectButton from "../components/SelectButton";
import CarGroupInfo from "../components/CarGroupInfo";
// import function(s)
import dateTimeFormat from "./../utils/dateTimeFormat";
import calcExtraFee from "../utils/calcExtraFee";
import calcAdditionalCharges from "../utils/calcAdditionalCharges";
import calcDailyPrice from "../utils/calcDailyPrice";
import calcTotal from "../utils/calcTotal";

const OfferConfig = ({
  page,
  setPage,
  selectedLocation,
  startDate,
  endDate,
  startTime,
  endTime,
}) => {
  // receive the props from the carDetailsModal
  const location = useLocation();
  const offerDetails = location.state.offerDetails;
  const offerVeryDetails = location.state.offerVeryDetails;
  const totalPrice = location.state.totalPrice;
  const rentalLength = location.state.rentalLength;
  // declare States
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [displayOptions, setDisplayOptions] = useState(5);
  const [modalVisible, setModalVisible] = useState(false);
  // declare variables
  const navigate = useNavigate();
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
  const totalExtraFee = calcExtraFee(offerVeryDetails);
  const totalAdditionalCharges = calcAdditionalCharges(
    offerVeryDetails,
    rentalLength,
    optionsSelected
  );
  const dailyPrice = calcDailyPrice({
    origin: "offerConfig",
    totalPrice,
    totalExtraFee,
    rentalLength,
  });
  const newTotal = calcTotal(
    dailyPrice,
    rentalLength,
    totalExtraFee,
    totalAdditionalCharges
  );
  const handleNext = () => {
    setPage("personnalDetails");
    navigate("/personnalDetails", {
      state: {
        selectedLocation,
        offerDetails,
        pickUpDate,
        dropOffDate,
        optionsSelected,
        offerVeryDetails,
        dailyPrice,
        rentalLength,
        newTotal,
      },
    });
  };

  return (
    <div className="offerConfigContainer">
      <SearchFieldSection
        page={page}
        setPage={setPage}
        selectedLocation={selectedLocation}
        startDate={startDate}
        endDate={endDate}
        startTime={startTime}
        endTime={endTime}
      />
      <div className="offerCongigPicContainer">
        <img
          className="offerCongigPic"
          src={offerVeryDetails.splashImages[0]}
          alt={`image of a ${offerDetails.headlines.description}`}
        />
        <p className="carTitle">
          {offerDetails.headlines.description.toUpperCase()}
        </p>
      </div>
      <div className="blackBand">
        <p>{offerDetails.headlines.longSubline.toUpperCase()}</p>
        <CarGroupInfo
          carGroupInfo={offerDetails.carGroupInfo}
          type="offerConfig"
        />
      </div>
      <div className="offerConfigBottomSection">
        <section className="leftColumn">
          <div>
            <h2>CHOISISSEZ VOTRE PROTECTION ET VOS OPTIONS</h2>
          </div>
          <div>
            <h3>VOTRE OFFRE INCLUT</h3>
            {offerVeryDetails.includedCharges.map((elem) => {
              return (
                <div className="mileage">
                  <p className="icon iconSmall"></p>
                  <p key={elem.title}>{elem.title}</p>
                </div>
              );
            })}
            {offerVeryDetails.additionalCharges.map((elem) => {
              if (optionsSelected.indexOf(elem.id) !== -1) {
                return (
                  <div className="mileage">
                    <p className="icon iconSmall"></p>
                    <p key={elem.title}>{elem.title}</p>
                  </div>
                );
              }
            })}
          </div>
          <div>
            <h3>CHOISISSEZ VOS OPTIONS</h3>
            <div className="allConfigCard">
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
              {displayOptions === 5 && (
                <ConfigurationCard
                  type="optionsNum"
                  setDisplayOptions={setDisplayOptions}
                />
              )}
            </div>
          </div>
          {displayOptions === 100 && (
            <p onClick={setDisplayOptions(5)}>- VOIR MOINS D'OPTIONS</p>
          )}
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
          <SelectButton func={handleNext} title="CONTINUER" />
        </section>
        {modalVisible && (
          <PricingModal
            origin="offerConfig"
            setModalVisible={setModalVisible}
            rentalLength={rentalLength}
            optionsSelected={optionsSelected}
            pricingDetails={offerVeryDetails}
            dailyPrice={dailyPrice}
            total={newTotal}
          />
        )}
      </div>
    </div>
  );
};

export default OfferConfig;
