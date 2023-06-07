// import from react and package(s)
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import style
import "./carDetailsModal.css";
// import component(s)
import CarouselPictures from "../CarouselPictures";
import SelectButton from "../SelectButton";
import BasicLink from "../BasicLink";
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
            {/* <button
              className="closing-button"
              onClick={() => {
                setModalVisible(false);
              }}
            >
              X
            </button> */}
            <div className="leftSection">
              <div className="carouselModal">
                {/* <CarouselPictures
                  pictures={carouselImages}
                  type="modal"
                  className="carouselContainer"
                /> */}
              </div>
              <p className="carouselTitle">{headlines.longSubline}</p>
              <CarGroupInfo carGroupInfo={carGroupInfo} />
              <div className="carouselText">
                <p>{maxPassengers} Sièges</p>
                <p>{doors} Portes</p>
                <p>{automatic ? "automatique" : "manuelle"}</p>
                <p>{baggage} Bagages</p>
                {airCondition && <p>Climatisation</p>}
                <p>{driverMinAge} ans </p>
              </div>
            </div>
            <div className="rightSection">
              <p>{totalPrice}</p>
              <SelectButton func={handleNext} title="SELECTIONNER" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetailsModal;
