import { Container } from "./styles"

interface InputProps {
  text: string;
  placeholder: string;
  type: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({text, placeholder, type, value, handleChange}: InputProps)=>{
  return(<>
   <Container>
    <h3>{text}</h3>
    <input type={type} placeholder ={placeholder} value={value} onChange={handleChange} />
   </Container>
  </>)
}
export default Input