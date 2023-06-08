// import from react and package(s)
import { useState, useEffect } from "react";
// import style
import "../styles/offerList.scss";
// import component(s)
import OfferSummary from "../components/OfferSummary";
import CategorySelect from "../components/CategorySelect";
import SearchFieldSection from "../components/SearchFieldsSection";

const OfferList = ({
  offers,
  setOffers,
  rentalLength,
  setRentalLength,
  page,
  setPage,
  selectedLocation,
  setSelectedLocation,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) => {
  const [category, setCategory] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // use effect that allows to store filteredOffers and access the number of results post filters
  useEffect(() => {
    const filteredOffers = () => {
      let filteredOffersCopy = [];
      for (let i = 0; i < offers.length; i++) {
        if (category.indexOf(offers[i].carGroupInfo.bodyStyle) !== -1) {
          filteredOffersCopy.push(offers[i]);
        }
      }
      setFilteredOffers(filteredOffersCopy);
    };
    if (category.length > 0) {
      filteredOffers();
    }
  }, [category]);

  return (
    <div className="offerListContainer">
      <SearchFieldSection
        setOffers={setOffers}
        setRentalLength={setRentalLength}
        page={page}
        setPage={setPage}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        setIsLoading={setIsLoading}
      />
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <div className="summaryAndFilter">
            <div className="summaryContainer">
              {category.length === 0 ? (
                <div className="summary">
                  <p>{offers.length}</p>
                  <span className="summaryTitle"> OFFRES</span>
                </div>
              ) : (
                <div className="summary">
                  <p>{filteredOffers.length}</p>
                  <span className="summaryTitle"> DE</span>
                  <p>{offers.length}</p>
                  <span className="summaryTitle"> OFFRES</span>
                </div>
              )}
            </div>
            <CategorySelect setCategory={setCategory} />
          </div>
          <div className="allOffers">
            {category.length === 0
              ? offers.map((elem) => {
                  return (
                    <OfferSummary
                      key={elem.id}
                      offerDetails={elem}
                      rentalLength={rentalLength}
                      setPage={setPage}
                    />
                  );
                })
              : filteredOffers.map((elem) => {
                  return (
                    <OfferSummary
                      key={elem.id}
                      offerDetails={elem}
                      rentalLength={rentalLength}
                      setPage={setPage}
                    />
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferList;
