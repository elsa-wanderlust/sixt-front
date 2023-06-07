// calc ADDITIONAL CHARGES - can be 'daily' or 'per rental'
// if on OfferConfig page - it depends on selectedOptions

const calcAdditionalCharges = (item, rentalLength, optionsSelected) => {
  let totalAdditionalCharges = 0;
  for (let i = 0; i < item.additionalCharges.length; i++) {
    if (
      (optionsSelected &&
        optionsSelected.indexOf(item.additionalCharges[i].id) !== -1) ||
      !optionsSelected
    ) {
      let multiplier = 0;
      if (
        item.additionalCharges[i].price.unit === "jour" ||
        item.additionalCharges[i].price.unit === "jour/unité"
      ) {
        multiplier = rentalLength;
      } else {
        multiplier = 1;
      }
      totalAdditionalCharges +=
        item.additionalCharges[i].price.amount * multiplier;
    }
  }
  return totalAdditionalCharges;
};

export default calcAdditionalCharges;
