import React, { useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 100%;
  position: relative;
  padding-bottom: 20px;
`;

const DropDownHeader = styled("div")`
  border-radius: 8px;
  padding: 18px 18px 15px;
  font: 14px/17px Roboto;
  color: #a2a2a2;
  background: #f5f8fa;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  width: 100%;
  top: 55px;
`;

const DropDownList = styled("ul")`
  border-radius: 8px;
  margin: 0;
  padding: 5px 0;
  background: #fff;
  box-shadow: 0px 3px 8px #00000026;
`;

const ListItem = styled("li")`
  list-style: none;
  font: 14px/32px Roboto;
  padding: 0 18px;
  margin: 0;
  :hover {
    background: #f5f8f2;
  }
`;

const options = ["Mangoes", "Apples", "Oranges"];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "Mangoes"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
