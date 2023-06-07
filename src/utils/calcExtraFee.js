// calc EXTRA FEE - always 'per rental'
const calcExtraFee = (item) => {
  let totalExtraFee = 0;
  for (let i = 0; i < item.extraFees.length; i++) {
    totalExtraFee += item.extraFees[i].price.amount;
  }
  return totalExtraFee;
};

export default calcExtraFee;
