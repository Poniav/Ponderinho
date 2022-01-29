import styled from "styled-components";
import { Button } from "react-bootstrap";

export const BtnSearch = styled(Button)`
  float: right;
  margin-top: -46px;
  position: relative;
  z-index: 2;
  font-size: 22px;
  height: 44px;
  background: none;
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
`;