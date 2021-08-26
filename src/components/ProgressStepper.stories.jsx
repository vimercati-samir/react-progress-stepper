import React from "react";

import {
  Stepper,
  Step,
  useStepper,
  StepNumber,
  StepTitle,
  StepStatus,
  StepDescription,
} from "./ProgressStepper";

export default {
  title: "Examples",
};

const TemplateNoContent = (props) => {
  const { numberOfSteps } = props;

  const { step, incrementStep, decrementStep } = useStepper(0, numberOfSteps);

  const buttonStyle = (type) => ({
    position: "fixed",
    left: "50%",
    bottom: "20px",
    transform: `translateX(calc(-50% ${
      type === "prev" ? "- 100px" : "+ 100px"
    }))`,
    border: "0",
    padding: "12px 30px",
    borderRadius: "2.5em",
    background: props.dark
      ? type === "prev"
        ? "#1a1a1a"
        : "#19b6fe"
      : type === "prev"
      ? "#fff"
      : "#3c3fed",
    color: props.dark ? "#fff" : type === "prev" ? "#000" : "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    cursor: "pointer",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "calc(100% - (20px))",
        height: "calc(100% - (20px))",
        background: props.dark ? "#000" : "#fff",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Stepper {...props} step={step}>
        {[...Array(numberOfSteps)].map((e, i) => (
          <Step></Step>
        ))}
      </Stepper>
      <button onClick={decrementStep} style={buttonStyle("prev")}>
        Prev
      </button>
      <button onClick={incrementStep} style={buttonStyle("next")}>
        Next
      </button>
    </div>
  );
};

const TemplateContent = (props) => {
  const { numberOfSteps } = props;

  const { step, incrementStep, decrementStep } = useStepper(1, numberOfSteps);

  const buttonStyle = (type) => ({
    position: "fixed",
    left: "50%",
    bottom: "40px",
    transform: `translateX(calc(-50% ${
      type === "prev" ? "- 250px" : "+ 250px"
    }))`,
    border: "0",
    padding: "12px 30px",
    borderRadius: "2.5em",
    background: props.dark
      ? type === "prev"
        ? "#1a1a1a"
        : "#19b6fe"
      : type === "prev"
      ? "#fff"
      : "#3c3fed",
    color: props.dark ? "#fff" : type === "prev" ? "#000" : "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    cursor: "pointer",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "calc(100% - (20px))",
        height: "calc(100% - (20px))",
        background: props.dark ? "#000" : "#fff",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Stepper {...props} step={step}>
        {[...Array(numberOfSteps)].map((e, i) => (
          <Step>
            <StepNumber />
            <StepTitle>Title</StepTitle>
            <StepStatus />
            <StepDescription>Description</StepDescription>
          </Step>
        ))}
      </Stepper>
      <button onClick={decrementStep} style={buttonStyle("prev")}>
        Prev
      </button>
      <button onClick={incrementStep} style={buttonStyle("next")}>
        Next
      </button>
    </div>
  );
};

export const ProgressStepper = TemplateNoContent.bind({});
ProgressStepper.args = {
  numberOfSteps: 4,
  vertical: false,
  dark: false,
  numbered: true,
  theme: {
    light: {
      step: {
        pending: {
          background: "#ededed",
          color: "#a1a3a7",
        },
        progress: {
          background: "#3c3fed",
          color: "#ffffff",
        },
        completed: {
          background: "#23c275",
          color: "#ffffff",
        },
      },
      content: {
        pending: {
          stepNumber: { color: "#a1a3a7" },
          title: { color: "#a1a3a7" },
          status: { background: "#f2f2f2", color: "#a1a3a7" },
          description: { color: "#a1a3a7" },
        },
        progress: {
          stepNumber: { color: "#131b26" },
          title: { color: "#131b26" },
          status: { background: "#e7e9fd", color: "#3c3fed" },
          description: { color: "#131b26" },
        },
        completed: {
          stepNumber: { color: "#131b26" },
          title: { color: "#131b26" },
          status: { background: "#e9faf2", color: "#23c275" },
          description: { color: "#131b26" },
        },
      },
      progressBar: {
        pending: {
          background: "#ededed",
        },
        progress: {
          background: "#e7e9fd",
          fill: "#3c3fed",
        },
        completed: {
          background: "#e9faf2",
          fill: "#23c275",
        },
      },
    },
    dark: {
      step: {
        pending: {
          background: "#1a1a1a",
          color: "#767676",
        },
        progress: {
          background: "#19b6fe",
          color: "#ffffff",
        },
        completed: {
          background: "#23c275",
          color: "#ffffff",
        },
      },
      content: {
        pending: {
          stepNumber: { color: "#767676" },
          title: { color: "#767676" },
          status: { background: "#1a1a1a", color: "#767676" },
          description: { color: "#767676" },
        },
        progress: {
          stepNumber: { color: "#ece4d9" },
          title: { color: "#ece4d9" },
          status: { background: "#08374c", color: "#19b6fe" },
          description: { color: "#ece4d9" },
        },
        completed: {
          stepNumber: { color: "#ece4d9" },
          title: { color: "#ece4d9" },
          status: { background: "#0b3a23", color: "#23c275" },
          description: { color: "#ece4d9" },
        },
      },
      progressBar: {
        pending: {
          background: "#1a1a1a",
        },
        progress: {
          background: "#08374c",
          fill: "#19b6fe",
        },
        completed: {
          background: "#0b3a23",
          fill: "#23c275",
        },
      },
    },
  },
};

export const ProgressStepperContent = TemplateContent.bind({});

ProgressStepperContent.args = {
  numberOfSteps: 3,
  vertical: false,
  dark: false,
  numbered: true,
  theme: {
    light: {
      step: {
        pending: {
          background: "#ededed",
          color: "#a1a3a7",
        },
        progress: {
          background: "#3c3fed",
          color: "#ffffff",
        },
        completed: {
          background: "#23c275",
          color: "#ffffff",
        },
      },
      content: {
        pending: {
          stepNumber: { color: "#a1a3a7" },
          title: { color: "#a1a3a7" },
          status: { background: "#f2f2f2", color: "#a1a3a7" },
          description: { color: "#a1a3a7" },
        },
        progress: {
          stepNumber: { color: "#131b26" },
          title: { color: "#131b26" },
          status: { background: "#e7e9fd", color: "#3c3fed" },
          description: { color: "#131b26" },
        },
        completed: {
          stepNumber: { color: "#131b26" },
          title: { color: "#131b26" },
          status: { background: "#e9faf2", color: "#23c275" },
          description: { color: "#131b26" },
        },
      },
      progressBar: {
        pending: {
          background: "#ededed",
        },
        progress: {
          background: "#e7e9fd",
          fill: "#3c3fed",
        },
        completed: {
          background: "#e9faf2",
          fill: "#23c275",
        },
      },
    },
    dark: {
      step: {
        pending: {
          background: "#1a1a1a",
          color: "#767676",
        },
        progress: {
          background: "#19b6fe",
          color: "#ffffff",
        },
        completed: {
          background: "#23c275",
          color: "#ffffff",
        },
      },
      content: {
        pending: {
          stepNumber: { color: "#767676" },
          title: { color: "#767676" },
          status: { background: "#1a1a1a", color: "#767676" },
          description: { color: "#767676" },
        },
        progress: {
          stepNumber: { color: "#ece4d9" },
          title: { color: "#ece4d9" },
          status: { background: "#08374c", color: "#19b6fe" },
          description: { color: "#ece4d9" },
        },
        completed: {
          stepNumber: { color: "#ece4d9" },
          title: { color: "#ece4d9" },
          status: { background: "#0b3a23", color: "#23c275" },
          description: { color: "#ece4d9" },
        },
      },
      progressBar: {
        pending: {
          background: "#1a1a1a",
        },
        progress: {
          background: "#08374c",
          fill: "#19b6fe",
        },
        completed: {
          background: "#0b3a23",
          fill: "#23c275",
        },
      },
    },
  },
};
