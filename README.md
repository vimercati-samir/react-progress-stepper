![npm bundle size](https://img.shields.io/bundlephobia/min/react-progress-stepper)
![GitHub package.json version](https://img.shields.io/github/package-json/v/vimercati-samir/react-progress-stepper)

# React Progress Stepper

Minimal and beautiful stepper for React.

![Stepper gif](https://raw.githubusercontent.com/vimercati-samir/files/master/2021-08-23%2000.55.35.gif?token=AMTKVNFDCDXEJGH2OWOCYFLBENWPC)

![Stepper dark gif](https://raw.githubusercontent.com/vimercati-samir/files/master/2021-08-23%2000.51.08.gif?token=AMTKVNEDUFAVDEG7655VEBDBENWOE)

## Installation

```shell
$ npm i react-progress-stepper
$ yarn add react-progress-stepper
```

## Usage

```js
import React from 'react';
import {
  Stepper,
  Step,
  useStepper,
} from "react-progress-stepper";

export default const App = () => {
  const { step, incrementStep, decrementStep } = useStepper(1, 3);

  return (
    <>
      <Stepper step={step}>
        <Step></Step>
        <Step></Step>
        <Step></Step>
        <Step></Step>
      </Stepper>
      <button onClick={decrementStep}>Prev</button>
      <button onClick={incrementStep}>Next</button>
    </>
  )
}
```

## Modules

### useStepper

Hook to handle the state of stepper easily, you could write your own logic to handle the state, but why when it's already done for you ;) .

To work properly you need to provide two arguments to useStepper:

- **Number of current step**: starts from 1;
- **Number of steps**.

useStepper provides several utilities:

- **step**: state to track the current step;
- **incrementStep**: function to increment state by one;
- **decrementStep**: function to decrement state by one;
- **goToStep**: function to set state to a specific step number.

### Stepper

Main component.

Props:

- **step**: state to track the current step;
- **vertical**: toggle vertical view;
- **dark**: toggle dark mode;
- **numbered**: if each step is numbered or not;
- **theme**: object to customize the appearance of the stepper, **read below to know more about theming and style overrides**.

### Step

Step and progress bar component.

Props:

- **customContent**: JSX element to override the step circle content.

### Content

![Stepper with content gif](https://raw.githubusercontent.com/vimercati-samir/files/master/2021-08-23%2000.43.42.gif?token=AMTKVNCLCRXWV4QIUNMDFSDBENWRC)

```js
import React from 'react';
import {
  Stepper,
  Step,
  useStepper,
  StepNumber,
  StepTitle,
  StepStatus,
  StepDescription,
} from "react-progress-stepper";

export default const App = () => {
  const { step, incrementStep, decrementStep } = useStepper(1, 3);

  return (
    <>
      <Stepper step={step}>
        <Stepper step={step}>
          <Step>
            <StepNumber />
            <StepTitle>Title</StepTitle>
            <StepStatus />
            <StepDescription>Description</StepDescription>
          </Step>
          <Step>
            <StepNumber />
            <StepTitle>Title</StepTitle>
            <StepStatus />
            <StepDescription>Description</StepDescription>
          </Step>
          <Step>
            <StepNumber />
            <StepTitle>Title</StepTitle>
            <StepStatus />
            <StepDescription>Description</StepDescription>
          </Step>
          <Step>
            <StepNumber />
            <StepTitle>Title</StepTitle>
            <StepStatus />
            <StepDescription>Description</StepDescription>
          </Step>
          <Step>
            <StepNumber />
            <StepTitle>Title</StepTitle>
            <StepStatus />
            <StepDescription>Description</StepDescription>
          </Step>
        </Stepper>
      </Stepper>
    </>
  )
}
```

#### StepNumber

Component to show number of step.

Props:

- **text**

#### StepTitle

Component to show title of step.

#### StepStatus

Component to show status of step (pending, in progress, completed).

Props:

- **textProgress**
- **textCompleted**
- **textPending**

#### StepDescription

Component to show description of step.

## Theming and style overrides

You can customize the appearance of the stepper in two ways:

1. Using the theme object:

```js
{
  light: {
    checkMark: {
      fillColor: "#23c275",
      fillIconColor: "#ffffff",
    },
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
    checkMark: {
      fillColor: "#23c275",
      fillIconColor: "#ffffff",
    },
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
}
```

2. Overriding the CSS using class names, example:

```css
.step {
  width: 3em;
  height: 3em;
}

.step.progress {
  background: #6ab04c;
}
```

## License and credits

react-progress-stepper is released under the MIT license, feel free to use it, share and modify.

Credits and special thanks to:

- [Vishnu Prasad](https://dribbble.com/vlockn) for the cool and awesome [design inspiration](https://dribbble.com/shots/14012793/attachments/5628816?mode=media)
- [Sergio Acosta](https://codepen.io/sergio_andresac/pens/public) for the cool and awesome [check mark animation](https://codepen.io/sergio_andresac/pen/NeYbMw)
