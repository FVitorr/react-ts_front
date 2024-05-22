import React from "react";
import { Container } from "./styles";

const Modal = ({ isOpen, onClose, children }) => {
  if (isOpen) {
    return <Container>{children}</Container>;
  } if(onClose) {
    return null;
  }
};

export default Modal;
