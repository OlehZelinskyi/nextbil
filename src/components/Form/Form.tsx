import styled from "styled-components";
import FormContainer from "./FormContainer";

const Form = styled.form`
  border-radius: 8px;
  background-color: #fff;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export default FormContainer(Form);
