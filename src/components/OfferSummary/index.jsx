const OfferSummary = ({ offerDetails, rentalLength }) => {
  const { headlines, images, carGroupInfo, prices } = offerDetails;
  return (
    <>
      <p>{headlines.description}</p>
      <p>{headlines.shortSubline}</p>
      <img src={images.small} alt={`image of a${headlines.description}`} />
      <p>{headlines.mileageInfo}</p>
      <p>€ {prices.dayPrice.amount} jour</p>
      <p>€ {(prices.dayPrice.amount * rentalLength).toFixed(2)} total</p>
    </>
  );
};

export default OfferSummary;
