// import style
import "./bookingCostItem.scss";

// COMPONENT USAGE
// called from BookingAllDetails components, displays one line of with description and cost
const BookingCostItem = ({ title, amount, unit, rentalLength }) => {
  const totalCalc = () => {
    let total = 0;
    if (amount) {
      if (unit === "jour" || unit === "jour/unité") {
        total = amount * rentalLength;
      } else {
        total = amount;
      }
    }
    return total.toFixed(2).toString().replace(".", ",");
  };
  return (
    <div className="pricingDetailsItem">
      <p>{title}</p>
      <p>€ {totalCalc()}</p>
    </div>
  );
};

export default BookingCostItem;
