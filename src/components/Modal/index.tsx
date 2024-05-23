import React from "react";
import { Container,Content } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Container>

      <span><button onClick={onClose}>Close</button></span>
      <Content>
        {children}
      </Content>

    </Container>
  );
};

export default Modal;