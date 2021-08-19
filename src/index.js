import React from "react";
import ReactDOM from "react-dom";
import {
  Stepper,
  Step,
  useStepper,
  StepNumber,
  StepTitle,
  StepStatus,
  StepDescription,
} from "./components/ProgressStepper";

ReactDOM.render(
  <React.StrictMode>
    <Stepper>
      <Step>
        <StepNumber />
        <StepTitle>Card Details</StepTitle>
        <StepStatus />
        <StepDescription>lorem ipsum dolor sit amet</StepDescription>
      </Step>
      <Step>
        <StepNumber />
        <StepTitle>Form review</StepTitle>
        <StepStatus />
        <StepDescription>lorem ipsum dolor sit amet</StepDescription>
      </Step>
      <Step>
        <StepNumber />
        <StepTitle>Authenticate OTP</StepTitle>
        <StepStatus />
        <StepDescription>lorem ipsum dolor sit amet</StepDescription>
      </Step>
      <Step>
        <StepNumber />
        <StepTitle>Create Code</StepTitle>
        <StepStatus />
        <StepDescription>lorem ipsum dolor sit amet</StepDescription>
      </Step>
    </Stepper>
  </React.StrictMode>,
  document.getElementById("root")
);
