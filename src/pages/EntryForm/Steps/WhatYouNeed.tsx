import React from "react";
import { EntryType } from "src/types";
import FormLabel from "@material-ui/core/FormLabel";
import FormStep from "../FormStep";
import FormField from "../FormField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import { InputPropsObject } from "src/hooks/useForm/useForm";
import ValidationMessage from "../../../components/ValidationMessage";

export const WhatYouNeed = ({
  style,
  inputs,
  errors
}: {
  style: any;
  inputs: InputPropsObject<EntryType>;
  errors: any;
}) => (
  <FormStep heading="How can we help?" style={style}>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.contestType!.id}>
        What kind of contest would you like to run?
      </FormLabel>
      <Select {...inputs.contestType}>
        <MenuItem value="test">test</MenuItem>
      </Select>
      <ValidationMessage
        errorMessage={errors.contestType}
        fieldId={inputs.contestType!.id}
      />
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.specificEvent!.id}>
        Do you want to use 99 for a specific event?
      </FormLabel>
      <Input {...inputs.specificEvent} />
      <ValidationMessage
        errorMessage={errors.specificEvent}
        fieldId={inputs.specificEvent!.id}
      />
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.deadline!.id}>
        Do you have a deadline?
      </FormLabel>
      {/* TODO date picker */}
      <Input {...inputs.deadline} />
      <ValidationMessage
        errorMessage={errors.deadline}
        fieldId={inputs.deadline!.id}
      />
    </FormField>
  </FormStep>
);
