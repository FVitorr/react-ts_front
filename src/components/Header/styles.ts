import {styled} from "styled-components";
import {SendPlane} from "@styled-icons/remix-fill/SendPlane";
import {PersonFill} from "@styled-icons/bootstrap/PersonFill";
import {BagFill} from "@styled-icons/bootstrap/BagFill"
import {Search} from "@styled-icons/bootstrap/Search"
import {ChevronDown} from "@styled-icons/bootstrap/ChevronDown"

export const Container = styled.div`
  display:flex;
  border:1px solid black;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-between;
  width:90%;
  margin: 0 auto;
  padding: 1.5rem 0;
  gap: 0.5rem;
`;

export const Logo = styled.div`
  display:flex;
  align-items:center;
  gap:0.5rem;
  width: 8%;
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

  select {
    height:36px;
    width:150px;
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

export const Input = styled.div`
  min-width: 40%;
  height: 36px;
  display: flex;
  align-items:center;
  justify-content:center;
  padding: 0 0.5rem;
  background-color:#f7f7f7;
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