// import component(s)
import SearchFieldSection from "../components/SearchFieldsSection";
import CarouselPictures from "../components/CarouselPictures";
// import style
import "../styles/general.css";
// import images
import carouselHome1 from "../assets/img/carousel/cfc9edb1-3e28-4ecd-8de5-21425d7d29ce.jpeg";
import carouselHome2 from "../assets/img/carousel/391cd6c1-8042-4ada-bfbf-6da86c8e5527.jpeg";
import carouselHome3 from "../assets/img/carousel/49dbc80f-3566-46f9-b294-b2fddb2fe8ae.jpeg";
import worldMap from "../assets/img/sixt-in-the-world.png";

const Home = ({
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
    <div>
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
      />
      <CarouselPictures pictures={carouselImages} />
      <div className="worldMapBg">
        <img src={worldMap} alt="carte mondiale des agences Sixt" />
      </div>
    </div>
  );
};

export default Home;
