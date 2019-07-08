import React from "react";
import { EntryType } from "src/types";
import FormLabel from "@material-ui/core/FormLabel";
import FormStep from "../FormStep";
import FormField from "../FormField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import { InputPropsObject } from "src/hooks/useForm/useForm";
import FormHelperText from "@material-ui/core/FormHelperText";

export const OrganisationOverview = ({
  style,
  inputs,
  errors
}: {
  style: any;
  inputs: InputPropsObject<EntryType>;
  errors: any;
}) => (
  <FormStep heading="Your organisation" style={style}>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.organisationName!.id}>
        Organisation Name
      </FormLabel>
      <Input required {...inputs.organisationName} />
      {errors.organisationName && (
        <FormHelperText id={`${inputs.organisationName!.id}-error`} error>
          {errors.organisationName}
        </FormHelperText>
      )}
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.sector!.id}>Sector</FormLabel>
      <Select required {...inputs.sector}>
        {[
          ["animal_welfare", "Animal welfare"],
          ["arts_and_culture", "Arts and Culture"],
          ["civic_services", "Civic services"],
          ["environmental_advocacy", "Environmental advocacy"],
          ["education", "Education"],
          [
            "international_relations",
            "International relations and development"
          ],
          ["health_services", "Health services"],
          ["religion", "Religion"],
          ["social_and_legal", "Social and legal services"],
          ["other", "Other"]
        ].map(optionPair => {
          return (
            <MenuItem key={optionPair[0]} value={optionPair[0]}>
              {optionPair[1]}
            </MenuItem>
          );
        })}
      </Select>
      {errors.sector && (
        <FormHelperText id={`${inputs.sector!.id}-error`} error>
          {errors.sector}
        </FormHelperText>
      )}
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.foundationYear!.id}>Year founded</FormLabel>
      <Input {...inputs.foundationYear} />
      {errors.foundationYear && (
        <FormHelperText id={`${inputs.foundationYear!.id}-error`} error>
          {errors.foundationYear}
        </FormHelperText>
      )}
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.description!.id}>
        Please provide a brief description of the organization's activity. (A
        sentence or two will suffice!)
      </FormLabel>
      <Input required {...inputs.description} />
      {errors.description && (
        <FormHelperText id={`${inputs.description!.id}-error`} error>
          {errors.description}
        </FormHelperText>
      )}
    </FormField>
  </FormStep>
);
