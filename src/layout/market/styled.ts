import { Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import BGCard from '../../assets/images/bgcard.svg';

export const PriceCard = styled(Col)`
  color: white;
  float: left;
  display: flex;
  flexdirection: row;
  background-image: url(${BGCard});
  background-repeat: no-repeat;
  background-width: 100%;
  background-position: 20% 0%;
  background-opacity: 2px;
  padding: 10px 20px 5px 20px;
  margin-bottom: 4px;
  border-radius: 4px;
  border: 1px solid #00000036;
  background-color: #192140;
`;

export const BtnSearch = styled(Button)`
  float: right;
  margin-top: -46px;
  position: relative;
  z-index: 2;
  font-size: 22px;
  height: 44px;
  background: rgb(30, 39, 74);
  border: none;
  color: #6b7188;
  &:focus {
    background: none;
    border: none;
    box-shadow: none;
  }
  &:active {
    background: none;
    border: none;
    box-shadow: none;
  }
  &:hover {
    background: none;
    border: none;
    box-shadow: none;
  }
  &::-webkit-input-placeholder {
    color: "red";
  }
`;