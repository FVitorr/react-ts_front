import styled from "styled-components";
import background from "../../assets/login-bg.png"

export const Container=styled.div`
  width:100vw;
  height:100vh;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:url(${background}); /* Correção aqui */
  background-position:0%;
`;

export const MidBody=styled.div`
  width:60%;
  height:90%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:100;
 
  
  >h1{
    margin:7rem 0 0;
    text-shadow: 2px 2px #fff;
  }
  >p{
    margin-top:8rem;
    width:90%;
    color:white;
    text-shadow: 3px 4px 5px black;
  }

  @media (max-width: 912px) {
    display:none;
  }
`

export const IFooter=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  width:90%;
  margin: 1rem 0; 
  >span{
    display:flex;
    gap:5px;
  }

  @media (max-width: 912px) {
    font-size:12px;
  }
`;