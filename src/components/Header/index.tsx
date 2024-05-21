import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Logo, Nav, SelectNav, SendIcon, Input, Addres, BagIcon, ProfileIcon, BagArea, Wrapper, SearchIcon, DownIcon } from "./styles";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1245); // Define o tamanho da tela para mudar para select
  };

  useEffect(() => {
    handleResize(); // Verifica o tamanho inicial da tela
    window.addEventListener('resize', handleResize); // Adiciona o event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o event listener quando o componente for desmontado
    };
  }, []);

  return (
    <>
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
              <span><Link to=''><p>Inicio</p></Link></span>
              <span><Link to=''><p>Lojas</p></Link></span>
              <span><Link to=''><p>Pets</p></Link></span>
              <span><Link to=''><p>Vestimentas</p></Link></span>
              <span><Link to=''><p>Joias</p></Link></span>
            </Nav>
          )}
          <Input>
            <SearchIcon/>
            <input type="text" placeholder="Busque por item ou loja"/>
          </Input>
          <Addres>
            <p>R. Test, 14</p>
            <DownIcon/>
          </Addres>
          <Wrapper>
            <span><Link to=''><ProfileIcon/></Link></span>
            <BagArea>
              <BagIcon/>
              <div>
                <span>0 itens</span>
                <span>R$ 0.00</span>
              </div>
            </BagArea>
          </Wrapper>
        </Content>
      </Container>
    </>
  );
};

export default Header;
