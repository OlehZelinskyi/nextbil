import React from "react";

export interface Props {
  onSubmit: () => void;
}

const FormContainer = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class extends React.Component<P> {
    private handleSubmit = (e: Event) => {
      e.preventDefault();
      console.log("SUBMIT");
    };

    render() {
      return <WrappedComponent onSubmit={this.handleSubmit} {...this.props} />;
    }
  };
};

export default FormContainer;
