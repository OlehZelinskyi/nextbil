import FormContainer from "./FormContainer";
import React from "react";
import { Heading, DecisionGroup, Button } from "..";
import IcoInput from "./Input";
import Dropdown from "../Dropdown";
import styles from "../../styles";
import StyledForm from "./StyledForm";
import { LetterSVG, LockSVG } from "./SVGImages";
import Link from "./Link";
import FormValidation from "./FormValidation";
import { hasErrors } from "../../utils";
import Loader from "../Loader";
import { Mutation } from "react-apollo";
import { userMutation } from "./mutations";
import { Response } from "./Response";
const Form = (props: { [key: string]: any; validate?: () => void }) => {
  const { darkTextColor } = styles;
  const {
    onSubmit,
    onInputChange,
    onSelectOption,
    onRadioChange,
    onCheckboxChange,
    showError,
    formData: {
      name,
      email,
      password,
      country,
      sex,
      agreements,
      errors,
      submitting,
      response,
    },
  } = props;
  return (
    <Mutation
      mutation={userMutation}
      variables={{ user: { name, email, password, country, gender: sex } }}
    >
      {(register: any) => {
        if (!!response) {
          return response.error ? (
            <Response>{response.error}</Response>
          ) : (
            <Response>{`${response.name} with email: ${response.email} from ${response.country} has been succesfully registered.`}</Response>
          );
        }

        return (
          <StyledForm onSubmit={(e) => onSubmit(register, e)}>
            <Heading size={28} color={darkTextColor}>
              Create a new account!
            </Heading>
            <IcoInput
              placeholder={"Enter your name"}
              type={"text"}
              name={"name"}
              handleChange={onInputChange}
              value={name}
              error={showError(errors.name)}
            />
            <IcoInput
              placeholder={"Email"}
              ico={<LetterSVG />}
              type={"email"}
              name={"email"}
              handleChange={onInputChange}
              value={email}
              error={showError(errors.email)}
            />
            <IcoInput
              placeholder={"Password"}
              ico={<LockSVG />}
              type={"password"}
              name={"password"}
              handleChange={onInputChange}
              value={password}
              error={showError(errors.password)}
            />
            <Dropdown
              value={country}
              setSelectedOption={onSelectOption}
              error={showError(errors.country)}
              options={["Latvia", "Lebanon", "Lesotho", "Liberia", "Libya"]}
            />
            <DecisionGroup
              vertical={false}
              type={"radio"}
              value={sex}
              options={["Male", "Female"]}
              handleRadioChange={onRadioChange}
              error={showError(errors.sex)}
            />
            <DecisionGroup
              vertical={true}
              type={"checkbox"}
              options={[
                <span>
                  Accept <Link>terms</Link> and <Link>conditions</Link>
                </span>,
              ]}
              handleRadioChange={onCheckboxChange}
              value={agreements}
              error={showError(errors.agreements)}
            />

            <Button type={"submit"} disabled={submitting || hasErrors(errors)}>
              {submitting ? <Loader /> : <span>Sign Up</span>}
            </Button>
          </StyledForm>
        );
      }}
    </Mutation>
  );
};

export default FormValidation(FormContainer(Form));
