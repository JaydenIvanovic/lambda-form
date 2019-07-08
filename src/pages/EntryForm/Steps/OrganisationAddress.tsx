import React from "react";
import { EntryType } from "src/types";
import FormLabel from "@material-ui/core/FormLabel";
import FormStep from "../FormStep";
import FormField from "../FormField";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import { InputPropsObject } from "src/hooks/useForm/useForm";
import ValidationMessage from "../../../components/ValidationMessage";

export const OrganisationAddress = ({
  style,
  inputs,
  errors
}: {
  style: any;
  inputs: InputPropsObject<EntryType>;
  errors: any;
}) => (
  <FormStep heading="Organisation address" style={style}>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.streetAddress!.id}>Address</FormLabel>
      <Input {...inputs.streetAddress} />
      <ValidationMessage
        errorMessage={errors.streetAddress}
        fieldId={inputs.streetAddress!.id}
      />
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.streetAddressTwo!.id}>
        Address line two
      </FormLabel>
      <Input {...inputs.streetAddressTwo} />
      <ValidationMessage
        errorMessage={errors.streetAddressTwo}
        fieldId={inputs.streetAddressTwo!.id}
      />
    </FormField>
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <FormField variation="column">
          <FormLabel htmlFor={inputs.city!.id}>City</FormLabel>
          <Input {...inputs.city} />
          <ValidationMessage
            errorMessage={errors.city}
            fieldId={inputs.city!.id}
          />
        </FormField>
      </Grid>
      <Grid item xs={6}>
        <FormField variation="column">
          <FormLabel htmlFor={inputs.province!.id}>Province</FormLabel>
          <Input {...inputs.province} />
          <ValidationMessage
            errorMessage={errors.province}
            fieldId={inputs.province!.id}
          />
        </FormField>
      </Grid>
    </Grid>
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <FormField variation="column">
          <FormLabel htmlFor={inputs.zip!.id}>Zip/Postcode</FormLabel>
          <Input {...inputs.zip} />
          <ValidationMessage
            errorMessage={errors.zip}
            fieldId={inputs.zip!.id}
          />
        </FormField>
      </Grid>
      <Grid item xs={6}>
        <FormField variation="column">
          <FormLabel htmlFor={inputs.country!.id}>Country</FormLabel>
          <Input {...inputs.country} />
          <ValidationMessage
            errorMessage={errors.country}
            fieldId={inputs.country!.id}
          />
        </FormField>
      </Grid>
    </Grid>
  </FormStep>
);
