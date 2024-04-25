import styled from "styled-components";

export const Container = styled.div`
  width:40%;
  min-width:300px;
  height:92%;
  border-radius:20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin: 0 1rem 0 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:0.5rem;
  background-color:white;

  @media (max-width: 912px) {
    width:80%; /* Porcentagem ajustada para telas menores */
    min-width:300px;
    margin:0;
  }

  @media (max-width: 500px) {
    width:90%; /* Porcentagem ajustada para telas menores */
    min-width:300px;
    margin:0;
  }
`;