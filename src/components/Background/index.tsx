import styled from "styled-components";

const Background = styled.div`
  background-color: ${(props) => props.color};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Background;
