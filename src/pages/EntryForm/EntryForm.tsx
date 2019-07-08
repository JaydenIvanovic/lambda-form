import useForm from "../../../src/hooks/useForm";

import React, { useState } from "react";
import uuid from "uuid/v4";
import axios from "axios";
import { API_BASE_URL } from "../../../src/config";
import { EntryType } from "../../../src/types";
import { withRouter } from "react-router-dom";
import { RouterProps } from "react-router";
import { useTransition } from "react-spring";

import { OrganisationOverview } from "./Steps/OrganisationOverview";
import { OrganisationDetails } from "./Steps/OrganisationDetails";
import { OrganisationMedia } from "./Steps/OrganisationMedia";
import { OrganisationAddress } from "./Steps/OrganisationAddress";
import { ContactPerson } from "./Steps/ContactPerson";
import { FinalDetails } from "./Steps/FinalDetails";
import { WhatYouNeed } from "./Steps/WhatYouNeed";

import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import FormValidator from "../../validation/forms";

function EntryForm({ history }: RouterProps) {
  const [values, errors, inputs, setErrors] = useForm<EntryType>({
    email: "",
    phoneNumber: "",
    website: "",
    applicantName: "",
    organisationName: "",
    role: "",
    streetAddress: "",
    streetAddressTwo: "",
    city: "",
    province: "",
    zip: "",
    country: "",
    foundationYear: "",
    registrationStatus: false,
    taxId: "",
    localisation: "local",
    hasParentAffiliation: false,
    sector: "animal_welfare",
    socialMediaHandle: "",
    socialMediaFollowers: "",
    description: "",
    priorUse: false,
    contestType: "logo",
    deadline: "",
    specificEvent: false,
    howDidYouHear: "blog",
    featureAgreement: true,
    collectEmailAgreement: true,
    privacyAgreement: true
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  if (currentStep !== prevStep) setPrevStep(currentStep);
  const transitions = useTransition(currentStep, p => p, {
    unique: true,
    from: {
      opacity: 0,
      transform: `translate3d(${(currentStep - prevStep) * 100}%,0,0)`
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: `translate3d(${(prevStep - currentStep) * 100}%,0,0)`
    }
  });

  function clearErrors() {
    Object.keys(inputs).forEach(key => {
      setErrors({ ...errors, key: "" });
    });
  }

  function validate() {
    const errors = [
      FormValidator.validateOrganisationOverview,
      FormValidator.validateOrganisationDetails,
      FormValidator.validateOrganisationMedia,
      FormValidator.validateOrganisationAddress,
      FormValidator.validateContactPerson,
      FormValidator.validateWhatYouNeed,
      FormValidator.validateFinalDetails
    ][currentStep](inputs);

    clearErrors();

    // Just get first error in array for now.
    // This could be made to batch errors in the future
    // rather than doing multiple renders per error.
    if (errors) {
      Object.keys(errors).forEach(key => {
        setErrors({ ...errors, key: errors[key][0] });
      });
    }

    return !errors;
  }

  function goForward() {
    setCurrentStep(currentStep + 1);
    setPrevStep(currentStep);
  }

  function goBack() {
    setCurrentStep(currentStep - 1);
    setPrevStep(currentStep);
  }

  function onSubmit() {
    const id = uuid();
    axios
      .put(`${API_BASE_URL}/entry/${id}`, {
        ...values,
        id
      })
      .then(() => history.push("/thank-you"))
      .catch(e => {
        window.alert("oh noes there was an error");
        console.log(e);
      });
  }

  function formSteps(style: any) {
    return [
      <OrganisationOverview style={style} inputs={inputs} errors={errors} />,
      <OrganisationDetails style={style} inputs={inputs} errors={errors} />,
      <OrganisationMedia style={style} inputs={inputs} errors={errors} />,
      <OrganisationAddress style={style} inputs={inputs} errors={errors} />,
      <ContactPerson style={style} inputs={inputs} errors={errors} />,
      <WhatYouNeed style={style} inputs={inputs} errors={errors} />,
      <FinalDetails
        style={style}
        inputs={inputs}
        errors={errors}
        onSubmit={onSubmit}
      />
    ];
  }

  const numFormSteps = 7;

  return (
    <form style={{ position: "relative" }}>
      {transitions.map(({ item, props, key }) => {
        return <div key={key}>{formSteps(props)[item]}</div>;
      })}
      <MobileStepper
        position="bottom"
        activeStep={currentStep}
        steps={numFormSteps}
        variant="progress"
        nextButton={
          <Button
            aria-label="Previous step"
            size="small"
            onClick={() => validate() && goForward()}
            disabled={currentStep === numFormSteps - 1}
          >
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            aria-label="Next step"
            size="small"
            onClick={goBack}
            disabled={currentStep === 0}
          >
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </form>
  );
}

export default withRouter(EntryForm);
