// import from react and package(s)
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import components
import InputComponent from "../components/InputComponent";
import PersonalDetailsSelect from "../components/PersonalDetailsSelect";
import SelectButton from "../components/SelectButton";
import BookingAllDetails from "../components/BookingAllDetails.js";
import AllModals from "../components/AllModals";
// import function
import validatePersonalDetails from "../utils/validatePersonalDetails";
import dateForDisplay from "../utils/dateforDisplay";
import validateDriverAge from "../utils/validateDriverAge";
// import style
import "../styles/personnalDetails.scss";

const PersonalDetails = ({ setPage }) => {
  // receive the props from the carDetailsModal
  const location = useLocation();
  // declare variables for display only
  const includedCharges = location.state.offerVeryDetails.includedCharges;
  const minAge = location.state.offerDetails.carGroupInfo.driverMinAge;
  const actualDailyPrice = location.state.dailyPrice;
  const rentalLength = location.state.rentalLength;
  const newTotal = location.state.newTotal;
  // declare variables for DB
  const agency = location.state.selectedLocation.title;
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
  // declare states to store message if age does not request booking requirement
  const [wrongAge, setWrongAge] = useState("");

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
    dayDOB,
    minAge
  );

  // declare states for booking request
  const [confCode, setConfCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // handle BOOKING SUBMIT function
  const handleSubmit = async () => {
    setWrongAge("");
    const isAgeOk = validateDriverAge(dayDOB, monthDOB, yearDOB, minAge);
    if (isAgeOk) {
      setWrongAge(isAgeOk);
    } else {
      try {
        const response = await axios.post(
          "https://site--sixt-certification--7lpgx9xk8rh5.code.run/booking/create",
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
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div className="personalDetailsPage">
      <div>
        <h1>INFORMATIONS PERSONNELLES</h1>
        <div className="MrMrs">
          <InputComponent
            type="radio"
            state={title}
            setState={setTitle}
            label="M."
          />
          <InputComponent
            type="radio"
            state={title}
            setState={setTitle}
            label="Mme"
          />
        </div>
        <div className="personalDetailsLine">
          <div className="personalDetailsColumn">
            <InputComponent
              type="text"
              placeholder="Société"
              state={company}
              setState={setCompany}
            />
          </div>
        </div>
        <div className="personalDetailsLine">
          <div className="personalDetailsColumn">
            <InputComponent
              type="text"
              validity={[1]}
              placeholder="Prénom *"
              state={firstName}
              setState={setFirstName}
            />
          </div>
          <div className="personalDetailsColumn">
            <InputComponent
              type="text"
              validity={[1]}
              placeholder="Nom de famille * "
              state={lastName}
              setState={setLastName}
            />
          </div>
        </div>
        <div className="personalDetailsLine">
          <div className="personalDetailsColumn">
            <InputComponent
              type="text"
              validity="email"
              placeholder="Adresse email *"
              state={email}
              setState={setEmail}
            />
          </div>
          <div className="personalDetailsColumn">
            <PersonalDetailsSelect
              type="countryCode"
              state={countryCode}
              setState={setCountryCode}
            />
            <InputComponent
              type="number"
              validity={[100000000, 9999999999]}
              placeholder="Numéro de téléphone *"
              state={phoneNum}
              setState={setPhoneNum}
            />
          </div>
        </div>
        <div className="personalDetailsLine">
          <div className="personalDetailsColumn">
            <InputComponent
              type="text"
              validity={[1]}
              placeholder="Rue *"
              state={street}
              setState={setStreet}
            />
          </div>
          <div className="personalDetailsColumn">
            <InputComponent
              type="number"
              validity={[10000, 99999]}
              placeholder="Code Postal *"
              state={zipCode}
              setState={setZipCode}
            />
            <InputComponent
              type="text"
              validity={[1]}
              placeholder="Ville *"
              state={city}
              setState={setCity}
            />
          </div>
        </div>
        <div className="personalDetailsLine">
          <div className="personalDetailsColumn">
            <PersonalDetailsSelect
              type="country"
              state={country}
              setState={setCountry}
            />
          </div>
        </div>
        <div className="personalDetailsLine">
          <div className="personalDetailsColumn">
            <p>DATE DE NAISSANCE</p>
          </div>
        </div>
        <div className="personalDetailsLine">
          <div className="personalDetailsColumn">
            <InputComponent
              type="number"
              validity={[1, 31]}
              placeholder="JJ *"
              state={dayDOB}
              setState={setDayDOB}
            />
            <InputComponent
              type="number"
              validity={[1, 12]}
              placeholder="MM *"
              state={monthDOB}
              setState={setMonthDOB}
            />
            <InputComponent
              type="number"
              validity={[1000, 3000]}
              placeholder="AAAA *"
              state={yearDOB}
              setState={setYearDOB}
            />
          </div>
        </div>
      </div>
      <h1>VÉRIFIER ET RÉSERVER</h1>
      <div className="bookingCheck">
        <BookingAllDetails
          page="personalDetails"
          rentalLength={rentalLength}
          optionsSelected={optionsSelected}
          extraFees={extraFees}
          additionalCharges={additionalCharges}
          dailyPrice={actualDailyPrice}
          total={newTotal}
          vehiculeName={vehiculeName}
          vehiculePicture={vehiculePicture}
          agency={agency}
          pickUpDateDisplay={dateForDisplay(pickUpDate)}
          dropOffDateDisplay={dateForDisplay(dropOffDate)}
          includedCharges={includedCharges}
          minAge={minAge}
        />
      </div>
      <div className="bottomSection">
        <p>
          En cliquand sur le bouton, je confirme avoir lu et accepté les{" "}
          <span>informations de location</span> et les{" "}
          <span>termes et conditions</span>.
        </p>
        {wrongAge && <p className="errorMessage">{wrongAge}</p>}
        <SelectButton
          title="RESERVER"
          disabled={!isValidated}
          func={handleSubmit}
          type="orangeLong"
        />
        {modalVisible && (
          <AllModals
            confCode={confCode}
            page="personalDetails"
            setModalVisible={setModalVisible}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
