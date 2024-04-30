import { Container } from "./styles";
import { MouseEventHandler, ReactNode } from 'react'; // Importe MouseEventHandler

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>; 
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;
