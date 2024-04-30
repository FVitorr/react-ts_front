import { Container } from "./styles";
import { ReactNode } from 'react'; // Importe ReactNode

interface BodyProps {
  children: ReactNode; // Defina children como tipo ReactNode
}

const Body = ({ children }: BodyProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Body;
