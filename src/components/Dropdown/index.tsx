import React, { PureComponent } from "react";
import Error from "../Error";
import DropDownContainer from "./DropdownContainer";
import DropDownHeader from "./DropdownHeader";
import Arrow from "./Arrow";
import DropDownListContainer from "./DropdownListContainer";
import DropDownList from "./DropdownList";
import ListItem from "./ListItem";

export interface Props {
  error?: string;
  setSelectedOption: (option: string) => void;
  value: string;
  options: string[];
}

export default class Dropdown extends PureComponent<Props> {
  state = {
    isOpen: false,
  };

  private setIsOpen = (bool: boolean) => {
    this.setState({ isOpen: bool });
  };

  private toggling = () => this.setIsOpen(!this.state.isOpen);

  private onOptionClicked = (option: string) => {
    const { setSelectedOption } = this.props;

    setSelectedOption(option);
    this.setIsOpen(false);
  };

  render() {
    const { error, value, options } = this.props;
    return (
      <>
        <DropDownContainer>
          <DropDownHeader
            onClick={this.toggling}
            data-testid={"dropdown-header"}
            error={!!error}
            value={!!value}
          >
            {value || "Select country"}
            <Arrow src={process.env.PUBLIC_URL + "/arrow.svg"} />
          </DropDownHeader>
          {this.state.isOpen && (
            <DropDownListContainer data-testid={"dropdown-list"}>
              <DropDownList>
                {options.map((option) => (
                  <ListItem
                    data-testid={"list-item"}
                    onClick={() => this.onOptionClicked(option)}
                    key={Math.random()}
                    value={option}
                  >
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
          {error && <Error>{error}</Error>}
        </DropDownContainer>
      </>
    );
  }
}
