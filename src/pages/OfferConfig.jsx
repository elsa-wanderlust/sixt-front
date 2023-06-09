// import from react and package(s)
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import style
import "../styles/offerConfig.scss";
// import component(s)
import SearchFieldSection from "../components/SearchFieldsSection";
import ConfigurationCard from "../components/ConfigurationCard";
import AllModals from "../components/AllModals";
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
  const oldTotal = location.state.totalPrice;
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
    setDisplayOptions(5);
  };
  const totalExtraFee = calcExtraFee(offerVeryDetails);
  const totalAdditionalCharges = calcAdditionalCharges(
    offerVeryDetails,
    rentalLength,
    optionsSelected
  );
  const dailyPrice = calcDailyPrice({
    origin: "offerConfig",
    oldTotal,
    totalExtraFee,
    rentalLength,
  });

  const newTotal = calcTotal(
    dailyPrice,
    rentalLength,
    totalExtraFee,
    totalAdditionalCharges
  );
  // handle price display
  const totalPriceInt = newTotal.toString().split(".")[0];
  const totalPriceDec = newTotal.toFixed(2).toString().split(".")[1];
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
                <div key={elem.title} className="mileage">
                  <p className="icon iconSmall"></p>
                  <p>{elem.title}</p>
                </div>
              );
            })}
            {offerVeryDetails.additionalCharges.map((elem) => {
              if (optionsSelected.indexOf(elem.id) !== -1) {
                return (
                  <div key={elem.title} className="mileage">
                    <p className="icon iconSmall"></p>
                    <p>{elem.title}</p>
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
            <p onClick={handleDisplay} className="lessOptions">
              - VOIR MOINS D'OPTIONS
            </p>
          )}
        </section>
        <section className="rightColumn">
          <div>
            <h3>TOTAL</h3>
            <div className="currAndTotal">
              <p>€</p>
              <div className="pricing">
                <p className="pricingBig">{totalPriceInt}</p>
                <p>{`,${totalPriceDec}`}</p>
              </div>
            </div>
          </div>
          <div className="moreDetailsTaxes">
            <div>
              <p className="iconVerySmall"> </p>
              <p
                onClick={() => {
                  setModalVisible(true);
                }}
              >
                Details du prix
              </p>
            </div>
            <p>Taxes includes</p>
          </div>

          <SelectButton
            func={handleNext}
            title="CONTINUER"
            type="whiteVeryLong"
          />
        </section>
        {modalVisible && (
          <AllModals
            page="offerConfig"
            setModalVisible={setModalVisible}
            rentalLength={rentalLength}
            optionsSelected={optionsSelected}
            extraFees={offerVeryDetails.extraFees}
            additionalCharges={offerVeryDetails.additionalCharges}
            dailyPrice={dailyPrice}
            total={newTotal}
          />
        )}
      </div>
    </div>
  );
};

export default OfferConfig;
