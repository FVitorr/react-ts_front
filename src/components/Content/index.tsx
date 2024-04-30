import { Container } from "./styles";
import { ReactNode } from 'react'; // Importe ReactNode

interface ContentProps {
  children: ReactNode; // Defina children como tipo ReactNode
}

const Content = ({ children }: ContentProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Content;
