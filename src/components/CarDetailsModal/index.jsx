// import from react and package(s)
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import style
import "./carDetailsModal.css";
// import component(s)
import CarouselPictures from "../CarouselPictures";

const CarDetailsModal = ({
  id,
  setModalVisible,
  description,
  carGroupInfo,
  totalPrice,
}) => {
  // declare states and variables
  const [offerDetails, setOfferDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [carouselImages, setcarouselImages] = useState([]);
  const {
    automatic,
    maxPassengers,
    doors,
    driverMinAge,
    airCondition,
    baggage,
  } = carGroupInfo;
  // useEffect
  useEffect(() => {
    const getOfferDetails = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/agency/offerDetails`,
          { id: id }
        );
        setOfferDetails(response.data);
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
    getOfferDetails();
  }, []);
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
              <p className="carouselTitle">{description}</p>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetailsModal;
