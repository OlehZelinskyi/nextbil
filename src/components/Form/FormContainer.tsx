import React from "react";

export interface Props {
  onSubmit: () => void;
}

export interface State {
  name: string;
  email: string;
  password: string;
  country: null;
  sex: "Male" | "Female";
  agreements: boolean;
}

const FormContainer = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class extends React.Component<P> {
    state = {
      name: "",
      email: "",
      password: "",
      country: null,
      sex: "Male",
      agreements: false,
    } as State;

    private handleSubmit = (e: Event) => {
      e.preventDefault();
      console.log("SUBMIT", this.state);
    };

    private handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    private handleSelectOption = (option: string) => {
      this.setState({ country: option });
    };

    private handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({ sex: e.currentTarget.value });
    };

    private handleCheckboxChange = () => {
      this.setState((prevState: State) => {
        return { agreements: !prevState.agreements };
      });
    };

    render() {
      return (
        <WrappedComponent
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          onSelectOption={this.handleSelectOption}
          formData={this.state}
          onRadioChange={this.handleRadioChange}
          onCheckboxChange={this.handleCheckboxChange}
          {...this.props}
        />
      );
    }
  };
};

export default FormContainer;
