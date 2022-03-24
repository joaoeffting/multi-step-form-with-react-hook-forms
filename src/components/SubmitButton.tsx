import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const ButtonStyled = styled.button`
  background-color: ${COLORS.color2};
  color: ${COLORS.color3};
  border: none;
  height: 40px;
`;

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  return <ButtonStyled type="submit">{children}</ButtonStyled>;
};

export default SubmitButton;
