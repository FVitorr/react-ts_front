import styled from "styled-components";
import background from "../../assets/login-bg.png"

export const Container = styled.div`
  width:70vw;
  height:80vh;
  border-radius:20px;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  background:url(${background}); /* Correção aqui */
  background-repeat:no-repeat;
  background-position:0%;

  
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;