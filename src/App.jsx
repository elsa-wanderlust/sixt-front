import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import "../src/styles/general.scss";
// import font
import "../src/fonts/RobotoCondensed-Regular.ttf";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashCan);

// import pages
import Home from "./pages/Home";
import OfferList from "./pages/OfferList";
import OfferConfig from "./pages/OfferConfig";
import PersonalDetails from "./pages/PersonnalDetails";
import BackOffice from "./pages/BackOffice";
// import component(s)
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  // declare state(s)
  const [page, setPage] = useState("home"); // which navigation page
  const [offers, setOffers] = useState(); // offers available
  const [rentalLength, setRentalLength] = useState(); // how many days is the rental
  // for the search fields
  const [selectedLocation, setSelectedLocation] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState({
    value: "T10:30:00",
    label: "10:30",
  });
  const [endTime, setEndTime] = useState({
    value: "...",
    label: "...",
  });
  return (
    <Router>
      <div className="container">
        <Header page={page} setPage={setPage} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                page={page}
                setPage={setPage}
                setOffers={setOffers}
                setRentalLength={setRentalLength}
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
            }
          />
          <Route
            path="/offerlist"
            element={
              <OfferList
                page={page}
                setPage={setPage}
                offers={offers}
                setOffers={setOffers}
                rentalLength={rentalLength}
                setRentalLength={setRentalLength}
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
            }
          />
          <Route
            path="/offerconfig"
            element={
              <OfferConfig
                page={page}
                setPage={setPage}
                selectedLocation={selectedLocation}
                startDate={startDate}
                endDate={endDate}
                startTime={startTime}
                endTime={endTime}
              />
            }
          />
          <Route
            path="/personnaldetails"
            element={
              <PersonalDetails
                selectedLocation={selectedLocation}
                startDate={startDate}
                endDate={endDate}
                startTime={startTime}
                endTime={endTime}
              />
            }
          />
          <Route
            path="/backoffice"
            element={<BackOffice setPage={setPage} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
