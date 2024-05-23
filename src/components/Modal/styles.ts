import styled from "styled-components";

export const Container= styled.div`
  max-width:100%;
  width:70vw;
  height:500px;
  position: absolute;
  top:10vh;
  bottom:0;
  left: 15vw;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);
  z-index:1000;
  display:flex;
  align-items:center;
  flex-direction:column;
  padding-top: 2.5rem;
  gap:1rem;

  >span{
  
    width:90%;
    display:flex;
    justify-content:end;
  }

  @media (max-width: 790px) {
    top:10%;
    left:0; 
    max-width:100%;
    width:100%;
    height:80%;
    background-color:red;
  }
`;

export const Content = styled.div`
  height:90%;
  width:100%;
  display:flex;
  /* justify-content:center; */
  align-items:center;
  flex-direction:column;
  padding-top: 1.5rem;
  gap:1.5rem;

`;