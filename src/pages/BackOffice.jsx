// import from react and package(s)
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import components
import BookingSummary from "../components/BookingSummary";
import Connect from "../components/Connect";

const BackOffice = ({ setPage }) => {
  // declare states
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true); // to provoke a refresh when a booking is deleted
  const [isConnected, setisConnected] = useState(false);
  setPage("backOffice");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/booking/all");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    isConnected && fetchData();
  }, [refresh, isConnected]);

  return (
    <div>
      {!isConnected ? (
        <div>
          <Connect setisConnected={setisConnected} />
        </div>
      ) : (
        <div>
          {isLoading ? (
            <p>chargement...</p>
          ) : (
            <div>
              {data.length ? (
                <p>
                  Vous avez {data.length} réservation{data.length > 1 && "s"}!
                </p>
              ) : (
                <p>
                  Vous n'avez même une réservation et risquez de faire faillite!
                </p>
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
