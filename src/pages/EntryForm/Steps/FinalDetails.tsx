import React from "react";
import { EntryType } from "src/types";
import FormLabel from "@material-ui/core/FormLabel";
import FormStep from "../FormStep";
import FormField from "../FormField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import { InputPropsObject } from "src/hooks/useForm/useForm";
import ValidationMessage from "../../../components/ValidationMessage";

export const FinalDetails = ({
  style,
  inputs,
  errors,
  onSubmit
}: {
  style: any;
  inputs: InputPropsObject<EntryType>;
  errors: any;
  onSubmit: () => void;
}) => (
  <FormStep heading="Final details" style={style}>
    <FormField variation="row">
      <FormLabel htmlFor={inputs.priorUse!.id}>
        Have you ever used 99designs before?
      </FormLabel>
      <Checkbox
        color="secondary"
        checked={inputs.priorUse!.value}
        {...inputs.priorUse}
      />
    </FormField>
    <FormField variation="column">
      <FormLabel htmlFor={inputs.howDidYouHear!.id}>
        How did you hear about 99designs?
      </FormLabel>
      <Select {...inputs.howDidYouHear}>
        {[
          ["internet", "Internet search"],
          ["word_of_mouth", "From an acquaintance (word of mouth)"],
          ["media", "Media coverage"],
          ["blog", "99designs blog"],
          ["social_media", "Social media"],
          ["other", "Other"]
        ].map(optionPair => {
          return (
            <MenuItem key={optionPair[0]} value={optionPair[0]}>
              {optionPair[1]}
            </MenuItem>
          );
        })}
      </Select>
      <ValidationMessage
        errorMessage={errors.howDidYouHear}
        fieldId={inputs.howDidYouHear!.id}
      />
    </FormField>
    <FormField variation="row">
      <FormLabel htmlFor={inputs.featureAgreement!.id}>
        If you're selected, do you consent to having your charity featured etc?
      </FormLabel>
      <Checkbox
        color="secondary"
        checked={inputs.featureAgreement!.value}
        {...inputs.featureAgreement}
      />
    </FormField>
    <FormField variation="row">
      <FormLabel htmlFor={inputs.collectEmailAgreement!.id}>
        Can we send you some cool emails?
      </FormLabel>
      <Checkbox
        color="secondary"
        checked={inputs.collectEmailAgreement!.value}
        {...inputs.collectEmailAgreement}
      />
    </FormField>
    <FormField variation="row">
      <FormLabel htmlFor={inputs.privacyAgreement!.id}>
        Do you understand that by submitting this form you consent to our
        privacy policy?
      </FormLabel>
      <Checkbox
        color="secondary"
        checked={inputs.privacyAgreement!.value}
        {...inputs.privacyAgreement}
      />
    </FormField>
    <Button onClick={onSubmit}>Submit!</Button>
  </FormStep>
);
