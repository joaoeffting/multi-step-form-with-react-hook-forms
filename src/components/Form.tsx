import React from "react";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Form = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: () => void;
}) => {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
};

export default Form;
