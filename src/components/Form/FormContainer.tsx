import React from "react";
import { hasErrors } from "../../utils";

export interface State {
  name: string;
  email: string;
  password: string;
  country: null;
  sex: "Male" | "Female" | null;
  agreements: boolean;
  errors: { [key: string]: true | string };
  submitting: boolean;
}

const FormContainer = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class extends React.PureComponent<P> {
    state = {
      name: "",
      email: "",
      password: "",
      country: null,
      sex: null,
      agreements: false,
      errors: {
        name: true,
        email: true,
        password: true,
        country: true,
        sex: true,
        agreements: true,
      },
      submitting: false,
    } as State;

    private handleSubmit = async (e: Event) => {
      e.preventDefault();
      const { errors, submitting, ...cleanedData } = this.state;
      const validated = await this.validateData(cleanedData);

      if (hasErrors(validated)) {
        return;
      }
      await this.setState({ submitting: true });
      await setTimeout(() => {
        this.setState({ submitting: false });
        console.log("submitted");
      }, 10000);
    };

    private validateData = (data: { [key: string]: any }) => {
      const { validate } = this.props as { [key: string]: any };
      const validatedData = validate(data);
      this.setState({ errors: validatedData });
      return validatedData;
    };

    private handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      const inputName = e.currentTarget.name;
      const inputValue = e.currentTarget.value;
      this.setState((prevState: State) => ({
        [inputName]: inputValue,
        errors: {
          ...prevState.errors,
          [inputName]: true,
        },
      }));
    };

    private handleSelectOption = (option: string) => {
      this.setState((prevState: State) => ({
        country: option,
        errors: {
          ...prevState.errors,
          country: true,
        },
      }));
    };

    private handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
      const inputValue = e.currentTarget.value;
      this.setState((prevState: State) => ({
        sex: inputValue,
        errors: {
          ...prevState.errors,
          sex: true,
        },
      }));
    };

    private handleCheckboxChange = () => {
      this.setState((prevState: State) => {
        return {
          agreements: !prevState.agreements,
          errors: {
            ...prevState.errors,
            agreements: true,
          },
        };
      });
    };

    private showError = (error: true | string) => {
      return error === true ? "" : error;
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
          showError={this.showError}
          {...this.props}
        />
      );
    }
  };
};

export default FormContainer;
