// import from react and package(s)
import { useState } from "react";
// import style
import "./pricingModal.css";
// import components
import PricingModalItem from "../PricingModalItem";

const PricingModal = ({
  origin, // which page do we come from? offerConfig or backOffice
  setModalVisible,
  rentalLength,
  optionsSelected,
  pricingDetails,
  dailyPrice,
  total,
  vehicule,
  agency,
  pickUpDateDisplay,
  dropOffDateDisplay,
}) => {
  return (
    <>
      <div
        className="pricingModal-container"
        onClick={() => {
          setModalVisible(false);
        }}
      >
        <div
          className="modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {origin === "backOffice" && (
            <div>
              <p>{vehicule.name}</p>
              <img src={vehicule.picture} alt={`image of a ${vehicule.name}`} />
              <p>
                {pickUpDateDisplay}-{dropOffDateDisplay}
              </p>
              <p>{agency}</p>
            </div>
          )}
          <p>DETAILS DU PRIX</p>
          <p>PERIODE DE LOCATION</p>
          <PricingModalItem
            title={`Durée de location (${rentalLength} jours x ${dailyPrice})`}
            amount={dailyPrice}
            unit="jour"
            rentalLength={rentalLength}
          />
          <p>PROTECTION ET OPTIONS</p>
          {/* if coming from Offer Config => displays if options have been selected cost is at 0*/}
          {pricingDetails.additionalCharges.map((elem) => {
            if (
              (origin === "offerConfig" &&
                (optionsSelected.indexOf(elem.id) !== -1 ||
                  elem.price.amount === 0)) ||
              origin === "backOffice"
            ) {
              return (
                <PricingModalItem
                  key={elem.title}
                  title={elem.title}
                  amount={elem.price.amount}
                  unit={elem.price.unit}
                  rentalLength={rentalLength}
                />
              );
            }
          })}

          <p>FRAIS</p>
          {pricingDetails.extraFees.map((elem) => {
            return (
              <PricingModalItem
                key={elem.title}
                title={elem.title}
                amount={elem.price.amount}
                unit={elem.price.unit}
                rentalLength={rentalLength}
              />
            );
          })}
          <div>
            <p>TOTAL</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingModal;
