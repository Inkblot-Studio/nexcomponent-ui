import React from "react";
import { motion } from "framer-motion";
import "./NexModal.scss"
import { NexModalProps } from "./NexModal.types";
import NexButton from "../NexButton";

const NexModal: React.FC<NexModalProps> = ({ setOpenModal }) => {
  const handleContinue = () => {
    setOpenModal(false);
  };

  return (
    <div className="nex-modal-wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="nex-modal-inner-wrapper"
      >
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
          />
          <NexButton
            onClick={handleContinue}
            text="Continue"
            type="primary"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default NexModal;