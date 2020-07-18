import styled from "styled-components";

import styles from "../../styles";

const Button = styled("button")<{ disabled: boolean }>`
  border-radius: 30px;
  color: #fff;
  border: none;
  padding: 20px;
  width: 100%;
  font: 18px/22px Roboto;
  background-color: ${styles.activeBtnColor};
  &:disabled {
    background: ${styles.inactiveTextColor};
  }
  :focus {
    outline: none;
  }
`;

export default Button;
