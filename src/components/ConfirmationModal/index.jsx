// import style
import "./ConfirmationModal.css";

const ConfirmationModal = ({ confCode, setModalVisible }) => {
  return (
    <>
      <div
        className="confModal-container"
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
          <p>RESERVATION CONFIRMEE</p>
          <p>Voici la référence de votre réservation : {confCode}</p>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
