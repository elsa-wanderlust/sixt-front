// ❗️ the DailyPrice is different from the one in the API and the DB
const calcDailyPrice = ({
  origin,
  totalExtraFee,
  rentalLength,
  dayPrice,
  oldTotal,
}) => {
  let dailyPrice = 0;
  if (origin === "offerConfig") {
    dailyPrice = Number(
      (
        (Number(oldTotal.replace(",", ".")) - totalExtraFee) /
        rentalLength
      ).toFixed(2)
    );
  } else if (origin === "backOffice")
    dailyPrice = Number(
      ((dayPrice.amount * rentalLength - totalExtraFee) / rentalLength).toFixed(
        2
      )
    );
  return dailyPrice;
};

export default calcDailyPrice;
