import { Container } from "./styles"

interface SpanProps {
  content:string;
  isVisible:boolean;
}

const Span = ({content,isVisible}:SpanProps)=>{
  
  if (isVisible){
    return(<>
       <Container>
        {content}
      </Container>
    </>)

  }
  return null;

}
export default Span