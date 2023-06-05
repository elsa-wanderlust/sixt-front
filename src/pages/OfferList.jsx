// import from react and package(s)
import { useState } from "react";
// import component(s)
import OfferSummary from "../components/OfferSummary";
import CategorySelect from "../components/CategorySelect";
import SearchFieldSection from "../components/SearchFieldsSection";

const OfferList = ({ offers, setOffers, rentalLength, setRentalLength }) => {
  const [category, setCategory] = useState([]);

  return (
    <div>
      <SearchFieldSection
        setOffers={setOffers}
        setRentalLength={setRentalLength}
      />
      <p>This is the offerList page</p>
      <p>{offers.length} OFFRES</p>
      <CategorySelect setCategory={setCategory} />
      {offers.map((elem) => {
        if (category.length === 0) {
          return (
            <OfferSummary
              key={elem.id}
              offerDetails={elem}
              rentalLength={rentalLength}
            />
          );
        } else if (
          category !== [] &&
          category.indexOf(elem.carGroupInfo.bodyStyle) !== -1
        ) {
          return (
            <OfferSummary
              key={elem.id}
              offerDetails={elem}
              rentalLength={rentalLength}
            />
          );
        }
      })}
    </div>
  );
};

export default OfferList;
