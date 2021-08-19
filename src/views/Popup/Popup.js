import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import HeaderModal from "../../components/HeaderPopup/HeaderPopup";
import WeatherHeader from "../../components/WeatherHeader/WeatherHeader";
import PopupContent from "../../components/PopupContent/PopupContent";

const Popup = ({ modalOpen, closingModal }) => {
  const closeModal = () => {
    closingModal(false);
  };

  return (
    <div>
      <Modal show={modalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <HeaderModal />
        </Modal.Header>
        <Modal.Body>
          <WeatherHeader />
          <PopupContent />
        </Modal.Body>
      </Modal>
    </div>
  );
};

Popup.propTypes = {
  modalOpen: PropTypes.bool,
  closingModal: PropTypes.func,
};

Popup.defaultProps = {
  modalOpen: false,
};

export default Popup;
