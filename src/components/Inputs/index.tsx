import { Container } from "./styles"

const Input = ({text,placeholder,type})=>{
  return(<>
   <Container>
    <h3>{text}</h3>
    <input type={type} placeholder ={placeholder} />
   </Container>
  </>)
}
export default Input