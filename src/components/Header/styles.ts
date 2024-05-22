import {styled} from "styled-components";
import {SendPlane} from "@styled-icons/remix-fill/SendPlane";
import {PersonFill} from "@styled-icons/bootstrap/PersonFill";
import {BagFill} from "@styled-icons/bootstrap/BagFill"
import {Search} from "@styled-icons/evaicons-solid/Search"
import {ChevronDown} from "@styled-icons/bootstrap/ChevronDown"
import {Home} from "@styled-icons/boxicons-solid/Home"
import {ClipboardBulletListLtr} from "@styled-icons/fluentui-system-regular/ClipboardBulletListLtr"

export const Container = styled.div`
  background-color:white;
  display:flex;
  border-bottom: 1px solid #dddddd;
  width: 100%;
  position:fixed;
`;

export const Content = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-between;
  width:90%;
  margin: 0 auto;
  padding: 1.5rem 0;
  gap: 0.5rem;

  @media (max-width: 940px) {
    justify-content: start; /* Esconde o Nav em telas pequenas */
    gap:1.5rem;
  }
`;

export const Logo = styled.div`
  display:flex;
  align-items:center;
  gap:0.5rem;
  min-width:100px;
  >h1{
    font-weight:600;
    font-size:1.8rem;
  }
`;

export const Nav = styled.div`
  display:flex; 
  >span{
    margin-left:0.7rem;
    >p{
      font-weight:400;
      position:relative;
      border: 1px solid black;
      ::before{
        content:"";
        position:absolute;
        left:0;
        right:0;
        bottom: 0;
      }
    }
    @media (max-width: 768px) {
      display: none; /* Esconde o Nav em telas pequenas */
    }
  }
`;

export const SelectNav = styled.div`
  display: none;

  @media (max-width: 1245px) {
    display: block;
  }

  @media (max-width: 940px) {
      display: none; /* Esconde o Nav em telas pequenas */
  }

  select {
    height:36px;
    max-width:150px;
    font-size: 16px;
  }`;

export const SendIcon = styled(SendPlane)`
  color:blueviolet;
  width:1.8rem;
`;

export const ProfileIcon = styled(PersonFill)`
  color:blueviolet;
  width:32px;
`;

export const HomeIcon = styled(Home)`
  color:blueviolet;
  width:32px;
`;

export const BagIcon = styled(BagFill)`
  color:blueviolet;
  width:28px;
`;

export const SearchIcon = styled(Search)`
  width:20px;
`;

export const DownIcon = styled(ChevronDown)`
  width: 20px;
`;

export const OrderIcon = styled(ClipboardBulletListLtr)`
  width: 32px;
`;

export const Input = styled.div`
  min-width: 40%;

  height: 36px;
  display: flex;
  align-items:center;
  justify-content:center;
  padding: 0 0.5rem;
  background-color:#f7f7f7;
  border-radius:10px;
  >input {
    background:transparent;
    padding:0 0.5rem;
    width:100%;
    height:100%;
    border:none;
    &:focus-visible{
      outline: none;
    }
  }
  @media (max-width: 940px) {
      display: none; /* Esconde o Nav em telas pequenas */
  }
`;

export const Addres = styled.div`
  display: flex;
  height:36px;
  align-items:center;
  gap: 0.5rem;
  cursor:pointer;
`;


export const Wrapper = styled.div`
  display:flex;
  gap:1rem;
  height:36px;
  align-items:center;

  @media (max-width: 940px) {
      display: none; /* Esconde o Nav em telas pequenas */
  }
`;

export const BagArea = styled.div`
  display:flex;
  gap:0.5rem;
  >div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    

    >span{
      font-size: 12px;
    }
  }
`;

export const HFooter = styled.div`
  display:flex;
  align-items:center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background:white;
  border-top: 1px solid #dddddd;
  padding: 1rem;
  z-index: 1000; /* Ajuste conforme necessário */
`;

export const CFooter = styled.div`
  display: flex;
  width:90%;
  height:50px;
  justify-content: space-evenly;
  align-items:center;
  gap: 1rem;
  >span{
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:5px;
    width:100%;
  }
`;