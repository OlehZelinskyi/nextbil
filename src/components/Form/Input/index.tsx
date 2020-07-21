import React from "react";

// Utils
import styled from "styled-components";
import styles from "../../../styles";
import Error from "../../Error";

export interface Props {
  ico?: JSX.Element;
  error?: string;
  placeholder: string;
  type: string;
  name: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
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

const Input = styled("input")<{
  background: string;
  color: string;
  ico?: boolean;
  error?: boolean;
}>`
  border: none;
  width: 100%;
  border-radius: 8px;
  padding: 16px 18px 17px;
  font-size: 14px;
  background-color: ${(props) => props.background};
  color: ${(props) => (props.error ? props.color : "#222")};
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
  const { ico, placeholder, error, type, name, handleChange, value } = props;
  const { inputBackground, inactiveTextColor } = styles;
  return (
    <InputWrapper>
      {ico && <IcoWrapper data-testid="ico-input">{ico}</IcoWrapper>}
      <Input
        background={inputBackground}
        color={inactiveTextColor}
        placeholder={placeholder}
        ico={!!ico}
        type={type}
        error={!!error}
        name={name}
        onChange={handleChange}
        value={value}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
}

export default IcoInput;
