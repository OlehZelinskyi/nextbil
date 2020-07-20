import styled from "styled-components";

const DecisionGroupWrapper = styled("div")<{ vertical: boolean | undefined }>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  width: 100%;
  padding-bottom: 20px;
  position: relative;
  font: 14px/17px Roboto;
`;

export default DecisionGroupWrapper;
