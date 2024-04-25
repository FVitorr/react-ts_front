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
  /* justify-content:center;*/
  >p{
    margin-top:2rem;
    width:90%;
  }
`

export const IFooter=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  width:90%;
  margin: 1rem 0; 
`;