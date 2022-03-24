import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
`;

const HeaderText = styled.span`
  font-size: 14px;
  font-weight: normal;
  margin: 5px 0 10px 0;
`;

const Header = ({ text, title }: { text: string; title: string }) => {
  return (
    <HeaderContainer>
      {title}
      <HeaderText>{text}</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
