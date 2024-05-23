import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow-x:inherit;
  gap:1rem;
  width:80%;
`;

export const Card = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  width:130px;;
  height:125px;

  background-color:transparent;
  gap:10px;
  >img {
    height:70%;
    width:70%;
    background-color:transparent;
    border-radius:5px;
  }

`;