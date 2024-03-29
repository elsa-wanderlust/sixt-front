// import from react and package(s)
import { useEffect } from "react";
// import component(s)
import SearchFieldSection from "../components/SearchFieldsSection";
import CarouselPictures from "../components/CarouselPictures";
import MediaConnect from "../components/MediaConnect";
// import style
import "../styles/homePage.scss";

// import images
import carouselHome1 from "../assets/img/carousel/cfc9edb1-3e28-4ecd-8de5-21425d7d29ce.jpeg";
import carouselHome2 from "../assets/img/carousel/391cd6c1-8042-4ada-bfbf-6da86c8e5527.jpeg";
import carouselHome3 from "../assets/img/carousel/49dbc80f-3566-46f9-b294-b2fddb2fe8ae.jpeg";
import worldMap from "../assets/img/sixt-in-the-world.png";

const Home = ({
  errorMessage,
  setErrorMessage,
  setOffers,
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
  const carouselImages = [carouselHome1, carouselHome2, carouselHome3];
  return (
    <div className="homeBg">
      <SearchFieldSection
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
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
      />
      <div className="carouselContainer">
        <CarouselPictures pictures={carouselImages} />
      </div>
      <div className="worldMapBg">
        <img src={worldMap} alt="carte mondiale des agences Sixt" />
      </div>
      <MediaConnect />
    </div>
  );
};

export default Home;
