import { Container,Space } from "./style";
import Header from "../../components/Header"
import Promotion from "../../components/Promotion";
import Banner from "../../components/Banner";

import image from '../../assets/react.svg';
import Joias from '../../assets/joias.jpeg'
import Roupas from '../../assets/roupas.png'
import Mercado from '../../assets/mercado.jpeg'
import Pets from "../../assets/pets.jpeg"
import Acessorios from "../../assets/acessorios.jpeg"

const bannerItems = [
  { text: 'Joias', img: Joias },
  { text: 'Roupas', img: Roupas },
  { text: 'Pets', img: Pets },
  { text: 'Acessorios', img: Acessorios },
  { text: 'Mercado', img: Mercado },
];


const Home = ()=>{
  return(<>
    <Container>  
      <Header/>
      <Space></Space>
      <Promotion>Cupons de frete gratis disponivel !</Promotion>
      <Banner items = {bannerItems} />
     
    </Container>
    </>);
}
export default Home;