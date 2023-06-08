// import style
import "./pricingModalItem.scss";

const PricingModalItem = ({ title, amount, unit, rentalLength }) => {
  console.log(title, amount);
  const totalCalc = () => {
    let total = 0;
    if (amount) {
      console.log(title);
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

export default PricingModalItem;
