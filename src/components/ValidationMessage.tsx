import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";

interface ValidationMessageProps {
  errorMessage: string;
  fieldId: string;
}
function ValidationMessage(props: ValidationMessageProps) {
  return (
    <>
      {props.errorMessage && (
        <FormHelperText id={`${props.fieldId}-error`} error>
          {props.errorMessage}
        </FormHelperText>
      )}
    </>
  );
}
export default ValidationMessage;
