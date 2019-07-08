import React from "react";
import { EntryType } from "src/types";
import FormLabel from "@material-ui/core/FormLabel";
import FormStep from "../FormStep";
import FormField from "../FormField";
import Input from "@material-ui/core/Input";
import { InputPropsObject } from "src/hooks/useForm/useForm";
import ValidationMessage from "../../../components/ValidationMessage";

export const ContactPerson = ({
  style,
  inputs,
  errors
}: {
  style: any;
  inputs: InputPropsObject<EntryType>;
  errors: any;
}) => (
  <FormStep heading="Contact person" style={style}>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.applicantName!.id}>
        Name of applicant
      </FormLabel>
      <Input {...inputs.applicantName} />
      <ValidationMessage
        errorMessage={errors.applicantName}
        fieldId={inputs.applicantName!.id}
      />
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.role!.id}>Role in organisation</FormLabel>
      <Input {...inputs.role} />
      <ValidationMessage errorMessage={errors.role} fieldId={inputs.role!.id} />
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.email!.id}>Applicant's email</FormLabel>
      <Input {...inputs.email} />
      <ValidationMessage
        errorMessage={errors.email}
        fieldId={inputs.email!.id}
      />
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.phoneNumber!.id}>
        Applicant's phone number
      </FormLabel>
      <Input {...inputs.phoneNumber} />
      <ValidationMessage
        errorMessage={errors.phoneNumber}
        fieldId={inputs.phoneNumber!.id}
      />
    </FormField>
  </FormStep>
);
