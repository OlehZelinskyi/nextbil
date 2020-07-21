import React, { PureComponent } from "react";
import { VALIDATE_CONFIG, MESSAGE, VALIDATE } from "./constants";

const FormValidation = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class FormValidation extends PureComponent<P> {
    private handleValidate = (data: {
      [key: string]: string | boolean | null;
    }) => {
      const fieldEntries = Object.entries(data);
      const validated: { [key: string]: any } = {};

      fieldEntries.forEach(([field, value]) => {
        validated[field] = this.validateField(field, value, VALIDATE_CONFIG);
      });

      return validated;
    };

    private validateField = (
      field: string,
      value: string | null | boolean,
      config: { [key: string]: any }
    ) => {
      const isValid = config[field][VALIDATE](value);
      return isValid ? true : config[field][MESSAGE];
    };

    render() {
      return (
        <WrappedComponent validate={this.handleValidate} {...this.props} />
      );
    }
  };

export default FormValidation;
