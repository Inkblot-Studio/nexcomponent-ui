import React, { useState, useEffect } from "react";
import "./NexModal.scss"
import { NexModalProps } from "./NexModal.types";
import { CSSTransition } from "react-transition-group";
import NexButton from "../NexButton";

const NexModal: React.FC<NexModalProps> = ({ setOpenModal }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleContinue = () => {
    setOpenModal(false);
  };

  return (
    <div className="nex-modal-wrapper">
      <CSSTransition
        in={showModal}
        classNames="fade"
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <div className="nex-modal-inner-wrapper">
          <div className="nex-modal-body">
            <p>The next page looks amazing. Hope you want to go there!</p>
          </div>
          <div className="nex-modal-footer">
            <NexButton
              onClick={() => {
                setOpenModal(false);
              }}
              text="Cancel"
              type="danger"
            >
            </NexButton>
            <NexButton onClick={handleContinue} text="Continue" type="primary" ></NexButton>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default NexModal;