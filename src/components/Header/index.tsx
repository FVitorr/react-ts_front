import { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Container, Content, Logo, Nav, SelectNav, SendIcon, Input, Addres, BagIcon, ProfileIcon, BagArea, WrapperBtn, SearchIcon, DownIcon, HFooter, HomeIcon, OrderIcon, CFooter } from "./styles";
import Modal from "../Modal";
import "./styles.css"




const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isFooter, setIsFooter] = useState(false); // Estado para controlar se é um rodapé fixo

  const [openModal, setOpenModal] = useState (false);  const location = useLocation(); // Obtém o caminho atual

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1245); // Define o tamanho da tela para mudar para select
    setIsFooter(window.innerWidth <= 940);
  };

  useEffect(() => {
    handleResize(); // Verifica o tamanho inicial da tela
    window.addEventListener('resize', handleResize); // Adiciona o event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o event listener quando o componente for desmontado
    };
  }, []);

  const isActive = (path:string) => {
    return location.pathname === path ? 'active' : undefined;
  }
  const iconStyle = (path:string) => {
    return{
      width: "32px",
      color: location.pathname === path ? 'blue' : "black"
    }
  }

  const [address, setAddress] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };


  return (
    <>
      <Modal isOpen = {openModal} onClose= {() => setOpenModal(false)}>
        <h2>Onde quer receber seus produtos ?</h2>
        <Input className='address_input' style={{display:"flex"}}>
            <SearchIcon/>
            <input type="text" placeholder="Busque endereço e numero"
              value={address}
              onChange={handleInputChange}
            />
        </Input>
      </Modal>
      <Container>
        <Content>
          <Logo>
            <span><SendIcon/></span>
            <h1>Title</h1>
          </Logo>
          {isMobile ? (
            <SelectNav>
              <select onChange={(e) => window.location.href = e.target.value}>
                <option value="">Inicio</option>
                <option value="">Lojas</option>
                <option value="">Pets</option>
                <option value="">Vestimentas</option>
                <option value="">Joias</option>
              </select>
            </SelectNav>
          ) : (
            <Nav>
              <span><Link to='/home'><p className={isActive('/react-ts_front/home')}>Inicio</p></Link></span>
              <span><Link to=''><p className={isActive('/react-ts_front/lojas')}>Lojas</p></Link></span>
              <span className={isActive('/react-ts_front/pets')}><Link to=''><p>Pets</p></Link></span>
              <span className={isActive('/react-ts_front/vestimentas')}><Link to=''><p>Vestimentas</p></Link></span>
              <span className={isActive('/react-ts_front/joias')}><Link to=''><p>Joias</p></Link></span>
            </Nav>
          )}
          <Input>
            <SearchIcon/>
            <input type="text" placeholder="Busque por item ou loja"/>
          </Input>
          <Addres onClick = {()=>{setOpenModal(!openModal)}}>
            <p>R. Test, 14</p>
            <DownIcon/>
          </Addres>
          <WrapperBtn>
            <span><Link to=''><ProfileIcon/></Link></span>
            <BagArea>
              <BagIcon/>
              <div>
                <span>0 itens</span>
                <span>R$ 0.00</span>
              </div>
            </BagArea>
          </WrapperBtn>
        </Content>
        {isFooter ? <HFooter>
          <CFooter>
            <span><HomeIcon style={iconStyle('/react-ts_front/home')}/><p>Start</p></span>
            <span><SearchIcon style={iconStyle('/react-ts_front/Search')}/><p>Search</p></span>
            <span><OrderIcon style={iconStyle('/react-ts_front/Order')}/><p>Order</p></span>
            <span><ProfileIcon style={iconStyle('/react-ts_front/Profile')}/><p>Profile</p></span>
          </CFooter>

        </HFooter> : null}
      </Container>
    </>
  );
};

export default Header;
