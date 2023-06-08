// import style
import "./ConfirmationModal.scss";

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
          <button
            className="closing-button"
            onClick={() => {
              setModalVisible(false);
            }}
          >
            <p className="icon"></p>
          </button>
          <p>RÉSERVATION CONFIRMÉE</p>
          <p>Voici la référence de votre réservation : {confCode}</p>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
