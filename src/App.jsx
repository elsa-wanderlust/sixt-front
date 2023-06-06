import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/styles/general.css";

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
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  return (
    <Router>
      <div className="container">
        <Header page={page} setPage={setPage} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
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
            }
          />
          <Route
            path="/offerlist"
            element={
              <OfferList
                offers={offers}
                setOffers={setOffers}
                rentalLength={rentalLength}
                setRentalLength={setRentalLength}
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
            }
          />
          <Route
            path="/offerconfig"
            element={<OfferConfig setPage={setPage} />}
          />
          <Route path="/personnaldetails" element={<PersonalDetails />} />
          <Route path="/backoffice" element={<BackOffice />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
