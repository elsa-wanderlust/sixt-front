// import style
import "./pricingModalItem.css";

const PricingModalItem = ({ title, amount, unit, rentalLength }) => {
  const totalCalc = () => {
    let total = 0;
    if (unit === "jour" || unit === "jour/unité") {
      total = amount * rentalLength;
    } else {
      total = amount;
    }
    return total.toFixed(2).replace(".", ",");
  };

  return (
    <div className="pricingDetailsItem">
      <p>{title}</p>
      {amount && <p>€ {totalCalc()}</p>}
    </div>
  );
};

export default PricingModalItem;
