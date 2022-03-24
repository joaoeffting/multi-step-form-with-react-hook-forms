import React from "react";
import styled from "styled-components";

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
`;

const Box = ({ children }: { children: React.ReactNode }) => {
  return <BoxStyled>{children}</BoxStyled>;
};

export default Box;
