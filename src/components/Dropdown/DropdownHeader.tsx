import styled from "styled-components";

const DropDownHeader = styled("div").attrs(({ name }: { name: string }) => ({
  name: name,
}))`
  position: relative;
  border-radius: 8px;
  padding: 18px 18px 15px;
  font: 14px/17px Roboto;
  color: ${(props: { error: boolean; value: boolean }) =>
    props.error || !props.value ? "#a2a2a2" : "#222"};
  background: #f5f8fa;
`;

export default DropDownHeader;
