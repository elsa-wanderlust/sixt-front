// import from react and package(s)
import { useLocation } from "react-router-dom";

const PersonalDetails = () => {
  // receive the props from the carDetailsModal
  const location = useLocation();
  // declare variables with booking info
  const agency = location.state[0].title;
  const vehiculeName = location.state[1].headlines.longSubline;
  const vehiculePicture = location.state[1].images.small;
  const dayPrice = location.state[1].prices.dayPrice.amount;
  const currency = location.state[1].prices.currency;
  const pickUpDate = location.state[2];
  const dropOffDate = location.state[3];
  const optionsSelected = location.state[4];
  const extraFees = location.state[5].extraFees;
  // additional charges = the free ones + the one selected
  const includedCharges = location.state[5].includedCharges;
  const additionalChargesAvail = location.state[5].additionalCharges;
  let additionalCharges = [];
  for (let i = 0; i < includedCharges.length; i++) {
    additionalCharges.push({
      title: includedCharges[i].title,
      price: { amount: 0, unit: "total", taxInfo: "" },
    });
  }
  for (let i = 0; i < additionalChargesAvail.length; i++) {
    if (optionsSelected.indexOf(additionalChargesAvail[i].id) !== -1) {
      additionalCharges.push({
        title: additionalChargesAvail[i].title,
        price: additionalChargesAvail[i].price,
      });
    }
  }
  return (
    <div>
      <p>This is the personal details</p>
    </div>
  );
};

export default PersonalDetails;
