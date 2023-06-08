// import style
import "./configurationCard.scss";

const ConfigurationCard = ({
  optionDetails,
  optionsSelected,
  setOptionsSelected,
  type,
  setDisplayOptions,
}) => {
  // declare variables for the Sixt Connect options - mutually exclusive
  const SixtConnectId = "I3";
  const SixtConnectPlusId = "I4";
  const SixtConnectIds = [SixtConnectId, SixtConnectPlusId];

  const handleSelect = () => {
    // IF NOT dealing with SixtConnects Options
    if (SixtConnectIds.indexOf(optionDetails.id) === -1) {
      // AND IF the option is NOT selected
      if (optionsSelected.indexOf(optionDetails.id) === -1) {
        let optionsSelectedCopy = [...optionsSelected];
        optionsSelectedCopy.push(optionDetails.id);
        setOptionsSelected(optionsSelectedCopy);
        // OR IF the option is ALREADY selected
      } else {
        let optionsSelectedCopy = [];
        for (let i = 0; i < optionsSelected.length; i++) {
          if (optionsSelected[i] !== optionDetails.id) {
            optionsSelectedCopy.push(optionsSelected[i]);
          }
        }
        setOptionsSelected(optionsSelectedCopy);
      }
      // OR IF dealing with SixtConnects Options
    } else {
      // AND IF neither SixtConnects Options are selected
      if (
        optionsSelected.indexOf(SixtConnectId) === -1 &&
        optionsSelected.indexOf(SixtConnectPlusId) === -1
      ) {
        let optionsSelectedCopy = [...optionsSelected];
        optionsSelectedCopy.push(optionDetails.id);
        setOptionsSelected(optionsSelectedCopy);
        // OR IF this SixtConnect Option is selected
      } else if (optionsSelected.indexOf(optionDetails.id) !== -1) {
        let optionsSelectedCopy = [];
        for (let i = 0; i < optionsSelected.length; i++) {
          if (optionsSelected[i] !== optionDetails.id) {
            optionsSelectedCopy.push(optionsSelected[i]);
          }
        }
        setOptionsSelected(optionsSelectedCopy);
        // OR IF the other SixtConnects Option is selected
      } else {
        let optionsSelectedCopy = [];
        for (let i = 0; i < optionsSelected.length; i++) {
          if (
            optionsSelected[i] !== SixtConnectId &&
            optionsSelected[i] !== SixtConnectPlusId
          ) {
            optionsSelectedCopy.push(optionsSelected[i]);
          }
        }
        optionsSelectedCopy.push(optionDetails.id);
        setOptionsSelected(optionsSelectedCopy);
      }
    }
  };
  // handle icons
  const iconName = !type && optionDetails.icon.split("-")[1];
  const iconList = {
    carshield: "",
    charges: "",
    wifi: "",
    satnav: "",
    refill: "",
    mailinvoice: "",
    childseat: "",
  };
  // handle price display
  const totalPriceInt =
    !type && optionDetails.price.amount.toString().split(".")[0];
  const totalPriceDec =
    !type && optionDetails.price.amount.toString().split(".")[1];
  // function to display more options

  return (
    <>
      {!type ? (
        <div
          className={
            optionsSelected.indexOf(optionDetails.id) !== -1 ||
            optionDetails.price.amount === 0
              ? "selected"
              : "notSelected"
          }
          onClick={optionDetails.price.amount !== 0 ? handleSelect : null}
        >
          <div>
            <div className="iconOptionTitle">
              <p className="icon iconOrangeLarge">{iconList[iconName]}</p>
              <p>{optionDetails.title.toUpperCase()}</p>
            </div>
            <p className="optionDescription">{optionDetails.description}</p>
            <div className="configCardPricing">
              {optionDetails.price.amount !== 0 && (
                <div className="configCardPricing">
                  <p>€</p>
                  <div className="configCardPrice">
                    <p className="configCardPricingBig">{totalPriceInt}</p>
                    <p>{`,${totalPriceDec}`}</p>
                  </div>
                  <p>{optionDetails.price.unit}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="moreOptions" onClick={setDisplayOptions(100)}>
          <p> + </p>
          <p> VOIR PLUS D'OPTIONS</p>
        </div>
      )}
    </>
  );
};

export default ConfigurationCard;
