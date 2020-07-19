import React from "react";

// Utils
import styled from "styled-components";
import styles from "../../../styles";

export interface Props {
  ico?: JSX.Element;
  error?: string;
  placeholder: string;
  type: string;
}

const InputWrapper = styled("div")`
  width: 100%;
  position: relative;
  padding-bottom: 20px;
`;

const IcoWrapper = styled("span")`
  position: absolute;
  top: 15px;
  left: 20px;
`;

const Error = styled("span")`
  position: absolute;
  bottom: 5px;
  font-size: 10px;
  color: #e82828;
  left: 5px;
`;

const Input = styled("input")<{
  background: string;
  color: string;
  ico?: boolean;
}>`
  border: none;
  width: 100%;
  border-radius: 8px;
  padding: 16px 18px 17px;
  font-size: 14px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  padding-left: ${(props) => (props.ico ? "50px" : "18px")};
  :focus {
    outline: none;
    color: #222;
  }
  ::placeholder {
    color: ${(props) => props.color};
  }
`;

function IcoInput(props: Props) {
  const { ico, placeholder, error, type } = props;
  const { inputBackground, inactiveTextColor } = styles;
  return (
    <InputWrapper>
      {ico && <IcoWrapper>{ico}</IcoWrapper>}
      <Input
        background={inputBackground}
        color={inactiveTextColor}
        placeholder={placeholder}
        ico={!!ico}
        type={type}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
}

export default IcoInput;
