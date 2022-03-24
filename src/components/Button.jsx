import styled from "styled-components";
import { COLORS } from "../constants";

type ButtonProps = {
  type?: string,
  onClick: () => void,
  text: string,
};

const ButtonStyled = styled.button`
  background-color: ${COLORS.color2};
  color: ${COLORS.color3};
  border: none;
  height: 40px;
  margin-bottom: 10px;
`;

const Button = ({ type = "submit", onClick, text }: ButtonProps) => {
  return (
    <ButtonStyled
      type={type}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
