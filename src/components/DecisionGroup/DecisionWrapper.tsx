import styled from "styled-components";

const DecisionWrapper = styled("span")<{ type: string }>`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover input ~ .checkmark {
    background-color: #eee;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
  ${({ type }) =>
    type === "checkbox"
      ? `.checkmark:after {
          left: 3px;
          top: 1px;
          width: 3px;
          height: 5px;
          border: solid #2196f3;
          border-width: 0 1px 1px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);`
      : `
      .checkmark:after {
        top: 2px;
        left: 2px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #2196f3;
      }
      `}
`;

export default DecisionWrapper;
