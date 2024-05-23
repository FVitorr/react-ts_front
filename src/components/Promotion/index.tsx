import React from 'react';
import { Container,TicketIcon } from './styles';

interface Props {
  children: React.ReactNode;
}

const Promotion: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <TicketIcon/>
      {children}
    </Container>
  );
};

export default Promotion;