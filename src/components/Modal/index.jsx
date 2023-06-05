// import component(s)
import CarDetailsModal from "../CarDetailsModal";
// import style
import "./modal.css";

const Modal = ({ setModalVisible, setWhichModal, whichModal }) => {
  return (
    <div
      className="modal-container"
      onClick={() => {
        setModalVisible(false);
      }}
    >
      {whichModal === "carDetails" && (
        <CarDetailsModal setModalVisible={setModalVisible} />
      )}
    </div>
  );
};

export default Modal;
