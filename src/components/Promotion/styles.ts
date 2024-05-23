import { styled } from "styled-components";
import {Ticket} from '@styled-icons/ionicons-sharp/Ticket'

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  background-color:#7457E9;

  width:100%;
  height:40px;

  color:white;
  font-size:18px;
  letter-spacing:2px;
  gap: 0.5rem;
`;

export const TicketIcon = styled(Ticket)`
  width: 30px;
`;