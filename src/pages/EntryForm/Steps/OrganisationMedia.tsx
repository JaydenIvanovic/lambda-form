import React from "react";
import { EntryType } from "src/types";
import FormLabel from "@material-ui/core/FormLabel";
import FormStep from "../FormStep";
import FormField from "../FormField";
import Input from "@material-ui/core/Input";
import { InputPropsObject } from "src/hooks/useForm/useForm";
import ValidationMessage from "../../../components/ValidationMessage";

export const OrganisationMedia = ({
  style,
  inputs,
  errors
}: {
  style: any;
  inputs: InputPropsObject<EntryType>;
  errors: any;
}) => (
  <FormStep heading="Organisation media" style={style}>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.website!.id}>Organisation Website</FormLabel>
      <Input required {...inputs.website} />
      <ValidationMessage
        errorMessage={errors.website}
        fieldId={inputs.website!.id}
      />
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.socialMediaHandle!.id}>
        Social media handle
      </FormLabel>
      <Input {...inputs.socialMediaHandle} />
      <ValidationMessage
        errorMessage={errors.socialMediaHandle}
        fieldId={inputs.socialMediaHandle!.id}
      />
    </FormField>
    <FormField variation="column">
      <FormLabel>Social media followers</FormLabel>
      <Input {...inputs.socialMediaFollowers} />
      <ValidationMessage
        errorMessage={errors.socialMediaFollowers}
        fieldId={inputs.socialMediaFollowers!.id}
      />
    </FormField>
  </FormStep>
);
