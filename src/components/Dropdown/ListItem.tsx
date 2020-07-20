import styled from "styled-components";

const ListItem = styled("li").attrs(({ name }: { name: string }) => ({
  name: name,
}))`
  list-style: none;
  font: 14px/32px Roboto;
  padding: 0 18px;
  margin: 0;
  :hover {
    background: #f5f8f2;
  }
`;

export default ListItem;
