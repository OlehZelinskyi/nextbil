import styled from "styled-components";

const Checkmark = styled("span")<{ type: string }>`
  position: absolute;
  top: 2px;
  left: 4px;
  height: 11px;
  width: 11px;
  background-color: #fff;
  border: 1px solid #2196f3;
  border-radius: ${({ type }) => (type === "checkbox" ? "3px" : "50%")};

  :after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export default Checkmark;
