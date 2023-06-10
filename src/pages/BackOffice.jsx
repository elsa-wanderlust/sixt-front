// import from react and package(s)
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import components
import BookingSummary from "../components/BookingSummary";
import Connect from "../components/Connect";
// import components
import "../styles/backOfficePage.scss";

const BackOffice = ({ setPage }) => {
  // declare states
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true); // to provoke a refresh when a booking is deleted
  const [isConnected, setisConnected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--sixt-certification--7lpgx9xk8rh5.code.run/booking/all"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    isConnected && fetchData();
  }, [refresh, isConnected]);

  return (
    <div>
      {!isConnected ? (
        <div className="backOfficeContainer">
          <Connect setisConnected={setisConnected} />
        </div>
      ) : (
        <div className="backOfficeContainer">
          {isLoading ? (
            <p>chargement...</p>
          ) : (
            <div className="allBookings">
              {data.length ? (
                <h1>
                  Vous avez {data.length} réservation{data.length > 1 && "s"}!
                </h1>
              ) : (
                <h1>
                  Vous n'avez même pas une réservation et risquez de faire
                  faillite!
                </h1>
              )}
              {data.map((elem) => {
                return (
                  <BookingSummary
                    key={elem._id}
                    bookingDetails={elem}
                    setRefresh={setRefresh}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BackOffice;
