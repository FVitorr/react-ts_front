import { Container } from "./styles"

interface InputProps {
  text: string;
  placeholder: string;
  type: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customStyles?: React.CSSProperties
}

const Input = ({text, placeholder, type, value, handleChange, customStyles}: InputProps)=>{
  return(<>
   <Container style={customStyles}>
    <h3>{text}</h3>
    <input type={type} placeholder ={placeholder} value={value} onChange={handleChange} />
   </Container>
  </>)
}
export default Input