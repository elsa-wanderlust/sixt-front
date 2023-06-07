const calcTotal = (
  dailyPrice,
  rentalLength,
  totalExtraFee,
  totalAdditionalCharges
) => {
  return dailyPrice * rentalLength + totalExtraFee + totalAdditionalCharges;
};

export default calcTotal;
