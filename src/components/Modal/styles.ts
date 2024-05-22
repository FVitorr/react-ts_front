import styled from "styled-components";

export const Container= styled.div`
  max-width:90%;
  width:90vw;
  height:500px;
  position: absolute;
  top:10vh;
  bottom:0;
  left: 5vw;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5);
  z-index:1000;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:0.5rem;


  @media (max-width: 790px) {
    top:10%;
    left:0; 
    max-width:100%;
    width:100%;
    height:80%;
    background-color:red;
  }
`;