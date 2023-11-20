import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modal-container">
      <div className="modal-body">{children}</div>
    </div>
  );
};

export default Modal;
