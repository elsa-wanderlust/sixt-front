// import from react and package(s)
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import components
import InputField from "../components/InputField";
import PersonalDetailsSelect from "../components/PersonalDetailsSelect";
import SelectButton from "../components/SelectButton";
import PricingModalItem from "../components/PricingModalItem";
import ConfirmationModal from "../components/ConfirmationModal";
// import function
import validatePersonalDetails from "../utils/validatePersonalDetails";
import dateForDisplay from "../utils/dateforDisplay";

const PersonalDetails = () => {
  // receive the props from the carDetailsModal
  const location = useLocation();
  // declare variables for display only
  const includedCharges = location.state.offerVeryDetails.includedCharges;
  const minAge = location.state.offerDetails.carGroupInfo.driverMinAge;
  const actualDailyPrice = location.state.dailyPrice;
  const rentalLength = location.state.rentalLength;
  const newTotal = location.state.newTotal;
  // declare variables for DB
  const agency = location.state.selectedLocation.title; //OK
  const vehiculeName = location.state.offerDetails.headlines.longSubline;
  const vehiculePicture = location.state.offerDetails.images.small;
  const dayPrice = location.state.offerDetails.prices.dayPrice.amount;
  const currency = location.state.offerDetails.prices.currency;
  const pickUpDate = location.state.pickUpDate;
  const dropOffDate = location.state.dropOffDate;
  const optionsSelected = location.state.optionsSelected;
  const extraFees = location.state.offerVeryDetails.extraFees;
  // additional charges = the free ones + the one selected
  const additionalChargesAvail =
    location.state.offerVeryDetails.additionalCharges;
  let additionalCharges = [];
  for (let i = 0; i < additionalChargesAvail.length; i++) {
    if (additionalChargesAvail[i].price.amount === 0) {
      additionalCharges.push({
        title: additionalChargesAvail[i].title,
        price: { amount: 0, unit: "total", taxInfo: "" },
      });
    } else if (optionsSelected.indexOf(additionalChargesAvail[i].id) !== -1) {
      additionalCharges.push({
        title: additionalChargesAvail[i].title,
        price: additionalChargesAvail[i].price,
      });
    }
  }
  // declare states to store info from the form
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState({ value: "France", label: "France" });
  const [yearDOB, setYearDOB] = useState("");
  const [monthDOB, setMonthDOB] = useState("");
  const [dayDOB, setDayDOB] = useState("");
  const [countryCode, setCountryCode] = useState({
    value: "France",
    label: "+33",
  });
  const [phoneNum, setPhoneNum] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");

  const isValidated = validatePersonalDetails(
    firstName,
    lastName,
    email,
    street,
    city,
    zipCode,
    phoneNum,
    yearDOB,
    monthDOB,
    dayDOB
  );

  // declare states for booking request
  const [confCode, setConfCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/booking/create",
        {
          firstName,
          lastName,
          agency,
          vehiculeName,
          vehiculePicture,
          pickUpDate,
          dropOffDate,
          dayPrice,
          currency,
          extraFees,
          additionalCharges,
        }
      );
      setConfCode(response.data);
      setModalVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <p>This is the personal details</p>
        <div>
          <InputField
            type="radio"
            state={title}
            setState={setTitle}
            label="M."
          />
          <InputField
            type="radio"
            state={title}
            setState={setTitle}
            label="Mme."
          />
        </div>
        <InputField
          type="text"
          placeholder="Société"
          state={company}
          setState={setCompany}
        />
        <InputField
          type="text"
          validity={[1]}
          placeholder="Prénom *"
          state={firstName}
          setState={setFirstName}
        />
        <InputField
          type="text"
          validity={[1]}
          placeholder="Nom de famille * "
          state={lastName}
          setState={setLastName}
        />
        <InputField
          type="text"
          validity="email"
          placeholder="Adresse email *"
          state={email}
          setState={setEmail}
        />
        <InputField
          type="text"
          validity={[1]}
          placeholder="Rue *"
          state={street}
          setState={setStreet}
        />
        <PersonalDetailsSelect
          type="country"
          state={country}
          setState={setCountry}
        />
        <PersonalDetailsSelect
          type="countryCode"
          state={countryCode}
          setState={setCountryCode}
        />
        <InputField
          type="text"
          validity={[1]}
          placeholder="Ville *"
          state={city}
          setState={setCity}
        />
        <InputField
          type="number"
          validity={[100000000, 9999999999]}
          placeholder="Numéro de téléphone *"
          state={phoneNum}
          setState={setPhoneNum}
        />
        <InputField
          type="number"
          validity={[10000, 99999]}
          placeholder="Code Postal *"
          state={zipCode}
          setState={setZipCode}
        />
        <InputField
          type="number"
          validity={[1, 31]}
          placeholder="JJ *"
          state={dayDOB}
          setState={setDayDOB}
        />
        <InputField
          type="number"
          validity={[1, 12]}
          placeholder="MM *"
          state={monthDOB}
          setState={setMonthDOB}
        />
        <InputField
          type="number"
          validity={[1920, 2005]}
          placeholder="AAAA *"
          state={yearDOB}
          setState={setYearDOB}
        />
      </div>
      <div>
        <p>VERIFIER ET RESERVER</p>
        <p>{vehiculeName}</p>
        <img src={vehiculePicture} alt={`picture of a ${vehiculeName}`} />
        <p>{agency}</p>
        <p>
          {dateForDisplay(pickUpDate)} - {dateForDisplay(dropOffDate)}
        </p>
        <p>VOTRE OFFER INCLUT</p>
        {includedCharges.map((elem) => {
          return <PricingModalItem key={elem.title} title={elem.title} />;
        })}
        <p>EXIGENCE POUR LES CONDUCTEURS</p>
        <p>Conducteur d'âgé au minimum {minAge} ans</p>
        <p>PERIODE DE LOCATION</p>
        <PricingModalItem
          title={`Durée de location (${rentalLength} jours x ${actualDailyPrice})`}
          amount={actualDailyPrice}
          unit="jour"
          rentalLength={rentalLength}
        />
        <p>PROTECTION ET OPTIONS</p>
        {additionalCharges.map((elem) => {
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
        <p>FRAIS</p>
        {extraFees.map((elem) => {
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
        <p>TOTAL</p>
        <p>{newTotal}</p>
      </div>
      <SelectButton
        title="RESERVER"
        disabled={!isValidated}
        func={handleSubmit}
      />
      {modalVisible && (
        <ConfirmationModal
          confCode={confCode}
          setModalVisible={setModalVisible}
        />
      )}
    </div>
  );
};

export default PersonalDetails;
