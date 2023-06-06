// import from react and package(s)
import { useState } from "react";
// import style
import "./pricingModal.css";
// import components
import PricingModalItem from "../PricingModalItem";

const PricingModal = ({
  setModalVisible,
  totalPrice,
  rentalLength,
  optionsSelected,
  offerDetails,
  offerVeryDetails,
}) => {
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
  console.log(typeof newTotal);
  // console.log(dailyPrice);
  // console.log(rentalLength);
  // console.log(totalExtraFee);
  // console.log(totalAdditionalCharges);

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
          <p>DETAILS DU PRIX</p>
          <p>PERIODE DE LOCATION</p>
          <PricingModalItem
            title={`Durée de location (${rentalLength} jours x ${dailyPrice})`}
            amount={dailyPrice}
            unit="jour"
            rentalLength={rentalLength}
          />
          <p>PROTECTION ET OPTIONS</p>
          {/* if options are free of charge */}
          {offerVeryDetails.includedCharges.map((elem) => {
            return (
              <PricingModalItem
                key={elem.title}
                title={elem.title}
                amount={0}
                unit="total"
                rentalLength={rentalLength}
              />
            );
          })}
          {/* if options have been selected */}
          {offerVeryDetails.additionalCharges.map((elem) => {
            if (optionsSelected.indexOf(elem.id) !== -1) {
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
          {offerVeryDetails.extraFees.map((elem) => {
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
            <p>{newTotal}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingModal;
