// import from react and package(s)
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import style
import "./carDetailsModal.scss";
// import component(s)
import CarouselPictures from "../CarouselPictures";
import SelectButton from "../SelectButton";
import CarGroupInfo from "../CarGroupInfo";

const CarDetailsModal = ({
  setModalVisible,
  offerDetails,
  rentalLength,
  totalPrice,
  setPage,
}) => {
  // declare states and variables
  const navigate = useNavigate();
  const [offerVeryDetails, setOfferVeryDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [carouselImages, setcarouselImages] = useState([]);
  const { id, headlines, images, carGroupInfo, prices } = offerDetails;
  const {
    automatic,
    maxPassengers,
    doors,
    driverMinAge,
    airCondition,
    baggage,
  } = carGroupInfo;
  // useEffect to get details on offer
  useEffect(() => {
    const getOfferVeryDetails = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/agency/offerDetails`,
          { id: id }
        );
        setOfferVeryDetails(response.data);
        const carouselImagesCopy = [];
        for (let i = 0; i < response.data.splashImages.length; i++) {
          carouselImagesCopy.push(response.data.splashImages[i]);
        }
        setcarouselImages(carouselImagesCopy);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOfferVeryDetails();
  }, []);
  const handleNext = () => {
    setPage("offerConfig");
    navigate("/offerConfig", {
      state: { offerDetails, offerVeryDetails, totalPrice, rentalLength },
    });
  };
  // handle price display
  const totalPriceInt = totalPrice.split(",")[0];
  const totalPriceDec = totalPrice.split(",")[1];

  return (
    <>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div
          className="modal-container"
          onClick={() => {
            setModalVisible(false);
          }}
        >
          <div
            className="modal"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div className="leftSection">
              <div className="carouselModal">
                <CarouselPictures pictures={carouselImages} type="modal" />
              </div>
              <p className="carouselTitle">{headlines.longSubline}</p>
              <CarGroupInfo carGroupInfo={carGroupInfo} type="groupInfoModal" />
            </div>
            <div className="rightSection">
              <button
                className="closing-button"
                onClick={() => {
                  setModalVisible(false);
                }}
              >
                <p className="icon"></p>
              </button>
              <div className="pricingSection">
                <p className="total">TOTAL</p>
                <div className="currAndTotal">
                  <p>€</p>
                  <div className="pricing">
                    <p className="pricingBig">{totalPriceInt}</p>
                    <p>{`,${totalPriceDec}`}</p>
                  </div>
                </div>
              </div>
              <p className="taxInfo">Taxes incluses</p>
              <SelectButton
                func={handleNext}
                title="SELECTIONNER"
                type="orangeSize2"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetailsModal;
