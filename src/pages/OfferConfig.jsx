// import from react and package(s)
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import component(s)
import SearchFieldSection from "../components/SearchFieldsSection";
import ConfigurationCard from "../components/ConfigurationCard";

const OfferConfig = (props) => {
  // receive the props from the carDetailsModal
  const location = useLocation();
  const offerDetails = location.state[0];
  const offerVeryDetails = location.state[1];

  // declare States
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [displayOptions, setDisplayOptions] = useState(5);

  // declare functions
  const handleDisplay = () => {
    if (displayOptions === 5) {
      return setDisplayOptions(100);
    } else {
      return setDisplayOptions(5);
    }
  };

  return (
    <div>
      <SearchFieldSection />
      <div>
        <img
          src={offerVeryDetails.splashImages[0]}
          alt={`image of a ${offerDetails.headlines.description}`}
        />
        <p>{offerDetails.headlines.description}</p>
        <p>{offerDetails.headlines.longSubline}</p>
      </div>
      <div>
        <section className="leftColumn">
          <div>
            <p>CHOISISSEZ VOTRE PROTECTION ET VOS OPTIONS</p>
          </div>
          <div>
            <p>VOTRE OFFRE INCLUT</p>
            {offerVeryDetails.includedCharges.map((elem) => {
              return <p key={elem.title}>{elem.title}</p>;
            })}
          </div>
          <div>
            <p>CHOISISSEZ VOS OPTIONS</p>
            {offerVeryDetails.additionalCharges.map((elem, index) => {
              if (index < displayOptions) {
                return (
                  <ConfigurationCard
                    key={elem.id}
                    optionDetails={elem}
                    optionsSelected={optionsSelected}
                    setOptionsSelected={setOptionsSelected}
                  />
                );
              }
            })}
          </div>
          <p onClick={handleDisplay}>+ VOIR PLUS D'OPTIONS</p>
          <p onClick={handleDisplay}>- VOIR MOINS D'OPTIONS</p>
        </section>
        <section className="rightColumn"></section>
      </div>
    </div>
  );
};

export default OfferConfig;
