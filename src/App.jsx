import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/styles/general.css";

// import pages
import Home from "./pages/Home";
import OfferList from "./pages/OfferList";
import BackOffice from "./pages/BackOffice";
// import component(s)
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // declare state(s)
  const [page, setPage] = useState("home"); // which navigation page
  const [offers, setOffers] = useState(); // offers available
  const [rentalLength, setRentalLength] = useState(); // how many days is the rental
  return (
    <Router>
      <div className="container">
        <Header page={page} />
        <Routes>
          <Route
            path="/"
            element={
              <Home setOffers={setOffers} setRentalLength={setRentalLength} />
            }
          />
          <Route
            path="/offerList"
            element={
              <OfferList
                offers={offers}
                setOffers={setOffers}
                rentalLength={rentalLength}
                setRentalLength={setRentalLength}
              />
            }
          />
          <Route path="/backoffice" element={<BackOffice />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
