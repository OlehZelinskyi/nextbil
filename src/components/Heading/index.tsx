import styled from "styled-components";

export default styled("div")<{ size: number; color: string }>`
  font-size: ${({ size }) => size}px;
  font-weight: 600;
  margin-bottom: 35px;
  font-family: Roboto Bold;
  color: ${({ color }) => color};
`;
