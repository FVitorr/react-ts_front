import {styled} from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  >h3{
    font-weight:500;
  }

  >input{
    height:28px;
    padding-left:0.5rem;
  }
  width:90%;

  @media (max-width: 912px) {
    >input{
      height:26px;
    }
    >h3{
      margin: 3px 0 3px 0;
      font-size: 18px;
    }
  }
`;