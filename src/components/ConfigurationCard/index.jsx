// import from react and package(s)
import { useState, useEffect } from "react";
// import style
import "./configurationCard.css";

const ConfigurationCard = ({
  optionDetails,
  optionsSelected,
  setOptionsSelected,
}) => {
  // declare variables for the Sixt Connect options - mutually exclusive
  const SixtConnectId = "I3";
  const SixtConnectPlusId = "I4";
  const SixtConnectIds = [SixtConnectId, SixtConnectPlusId];

  const handleSelect = () => {
    // IF NOT dealing with SixtConnects Options
    if (SixtConnectIds.indexOf(optionDetails.id) === -1) {
      // AND IF the option is NOT selected
      if (optionsSelected.indexOf(optionDetails.id) === -1) {
        let optionsSelectedCopy = [...optionsSelected];
        optionsSelectedCopy.push(optionDetails.id);
        setOptionsSelected(optionsSelectedCopy);
        // OR IF the option is ALREADY selected
      } else {
        let optionsSelectedCopy = [];
        for (let i = 0; i < optionsSelected.length; i++) {
          if (optionsSelected[i] !== optionDetails.id) {
            optionsSelectedCopy.push(optionsSelected[i]);
          }
        }
        setOptionsSelected(optionsSelectedCopy);
      }
      // OR IF dealing with SixtConnects Options
    } else {
      // AND IF neither SixtConnects Options are selected
      if (
        optionsSelected.indexOf(SixtConnectId) === -1 &&
        optionsSelected.indexOf(SixtConnectPlusId) === -1
      ) {
        let optionsSelectedCopy = [...optionsSelected];
        optionsSelectedCopy.push(optionDetails.id);
        setOptionsSelected(optionsSelectedCopy);
        // OR IF this SixtConnect Option is selected
      } else if (optionsSelected.indexOf(optionDetails.id) !== -1) {
        let optionsSelectedCopy = [];
        for (let i = 0; i < optionsSelected.length; i++) {
          if (optionsSelected[i] !== optionDetails.id) {
            optionsSelectedCopy.push(optionsSelected[i]);
          }
        }
        setOptionsSelected(optionsSelectedCopy);
        // OR IF the other SixtConnects Option is selected
      } else {
        let optionsSelectedCopy = [];
        for (let i = 0; i < optionsSelected.length; i++) {
          if (
            optionsSelected[i] !== SixtConnectId &&
            optionsSelected[i] !== SixtConnectPlusId
          ) {
            optionsSelectedCopy.push(optionsSelected[i]);
          }
        }
        optionsSelectedCopy.push(optionDetails.id);
        setOptionsSelected(optionsSelectedCopy);
      }
    }
  };

  return (
    <div
      className={
        optionsSelected.indexOf(optionDetails.id) !== -1 ||
        optionDetails.price.amount === 0
          ? "selected"
          : "notSelected"
      }
      onClick={optionDetails.price.amount !== 0 && handleSelect}
    >
      <div>
        {optionDetails.icon}
        <p>{optionDetails.title.toUpperCase()}</p>
        <p>{optionDetails.description}</p>
        <p>
          {optionDetails.price.amount !== 0 &&
            `€ ${optionDetails.price.amount} ${optionDetails.price.unit}`}
        </p>
      </div>
      <p>-----------------------</p>
    </div>
  );
};

export default ConfigurationCard;
