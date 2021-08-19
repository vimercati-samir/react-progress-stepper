"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepDescription = exports.StepStatus = exports.StepTitle = exports.StepNumber = exports.useStepper = exports.Step = exports.Stepper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _fonts = _interopRequireDefault(require("../assets/fonts/fonts"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var animationOpacity = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var completedBarAnimation = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n"])));
var progressBarAnimation = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  from {\n    width: 0;\n  }\n  to {\n    width: 50%;\n  }\n"])));
var completedProgressBarVerticalAnimation = (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  from {\n    height: 0;\n  }\n  to {\n    height: 100%;\n  }\n"])));
var progressBarVerticalAnimation = (0, _styledComponents.keyframes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  from {\n    height: 0;\n  }\n  to {\n    height: 50%;\n  }\n"])));
var stepAnimationOpacityText = (0, _styledComponents.keyframes)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var animateSuccessTip = (0, _styledComponents.keyframes)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  0% {\n    width: 0;\n    left: 0.0625em;\n    top: 1.1875em;\n  }\n  54% {\n    width: 0;\n    left: 0.0625em;\n    top: 1.1875em;\n  }\n  70% {\n    width: 3.125em;\n    left: -0.5em;\n    top: 2.3125em;\n  }\n  84% {\n    width: 1.0625em;\n    left: 1.3125em;\n    top: 3em;\n  }\n  100% {\n    width: 1.5625em;\n    left: 0.875em;\n    top: 2.8125em;\n  }\n"])));
var animateSuccessLong = (0, _styledComponents.keyframes)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  0% {\n    width: 0;\n    right: 2.875em;\n    top: 3.375em;\n  }\n  65% {\n    width: 0;\n    right: 2.875em;\n    top: 3.375em;\n  }\n  84% {\n    width: 3.4375em;\n    right: 0;\n    top: 2.1875em;\n  }\n  100% {\n    width: 2.9375em;\n    right: 0.5em;\n    top: 2.375em;\n  }\n"])));

var StepperStyled = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Montserrat\", sans-serif;\n  ", "\n"])), function (props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      flex-direction: column;\n    "])));
});

var StepStyled = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  position: relative;\n  width: 2.5em;\n  height: 2.5em;\n  border-radius: 50%;\n  background: ", ";\n  color: ", ";\n  ", "\n"])), function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return (props.isStepInProgress || props.isStepCompleted) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      animation: ", " 1s ease;\n    "])), animationOpacity);
});

var Number = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: ", " 1s ease;\n"])), stepAnimationOpacityText);

var AnimationCheckMark = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 0.455em;\n"])));

var CheckMarkStyled = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 5.5em;\n  height: 5.5em;\n  border-radius: 50%;\n  margin: 0 auto;\n  background: ", ";\n  font-size: 1em;\n"])), function (props) {
  return props.theme.fillColor;
});

var SaIcon = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  & {\n    width: 5em;\n    height: 5em;\n    border: 0.25em solid #23c275;\n    border-radius: 2.5em;\n    border-radius: 50%;\n    border-color: #23c275;\n    margin: auto;\n    padding: 0;\n    position: relative;\n    box-sizing: content-box;\n    overflow: hidden;\n  }\n  &:before,\n  &:after {\n    content: \"\";\n    border-radius: 2.5em;\n    border-radius: 50%;\n    position: absolute;\n    width: 3.75em;\n    height: 7.5em;\n    background: #23c275;\n    transform: rotate(45deg);\n  }\n  &:before {\n    border-radius: 7.5em 0 0 7.5em;\n    top: -0.4375em;\n    left: -2.0625em;\n    transform: rotate(-45deg);\n    transform-origin: 3.75em 3.75em;\n  }\n  &:after {\n    border-radius: 0 7.5em 7.5em 0;\n    top: -0.6875em;\n    left: 1.875em;\n    transform: rotate(-45deg);\n    transform-origin: 0 3.75em;\n  }\n"])));

var SaTip = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  height: 0.3125em;\n  background-color: ", ";\n  display: block;\n  border-radius: 0.125em;\n  position: absolute;\n  z-index: 2;\n  width: 1.5625em;\n  left: 0.875em;\n  top: 2.875em;\n  transform: rotate(45deg);\n  animation: ", " 0.75s;\n"])), function (props) {
  return props.theme.fillIconColor;
}, animateSuccessTip);

var SaLong = _styledComponents.default.span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  height: 0.3125em;\n  background-color: ", ";\n  display: block;\n  border-radius: 0.125em;\n  position: absolute;\n  z-index: 2;\n  width: 2.9375em;\n  right: 0.5em;\n  top: 2.375em;\n  transform: rotate(-45deg);\n  animation: ", " 0.75s;\n"])), function (props) {
  return props.theme.fillIconColor;
}, animateSuccessLong);

var SaPlaceholder = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 5em;\n  height: 5em;\n  border-radius: 2.5em;\n  border-radius: 50%;\n  box-sizing: content-box;\n  position: absolute;\n  left: -0.25em;\n  top: -0.25em;\n  z-index: 2;\n"])));

var SaFix = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 0.3125em;\n  height: 5.625em;\n  background-color: ", ";\n  position: absolute;\n  left: 1.75em;\n  top: 0.5em;\n  z-index: 1;\n  transform: rotate(-45deg);\n"])), function (props) {
  return props.theme.fillColor;
});

var Content = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 200px;\n  margin-top: 1em;\n  ", "\n  ", "\n    ", "\n"])), function (props) {
  return props.isLastStep && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      left: auto;\n      right: 0;\n      text-align: right;\n    "])));
}, function (props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      top: 0;\n      left: 100%;\n      margin: 0;\n      margin-left: 1em;\n    "])));
}, function (props) {
  return props.vertical && props.isLastStep && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      top: auto;\n      right: 0;\n      bottom: 0;\n      text-align: left;\n    "])));
});

var StepNumberStyled = _styledComponents.default.p(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-top: 0.75rem;\n  font-size: 0.8em;\n  color: ", ";\n"])), function (props) {
  return props.theme.color;
});

var StepTitleStyled = _styledComponents.default.p(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-top: 0.75rem;\n  font-weight: bold;\n  color: ", ";\n"])), function (props) {
  return props.theme.color;
});

var StepStatusStyled = _styledComponents.default.p(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 0;\n  margin-top: 0.75rem;\n  padding: 0.4rem 0.75rem;\n  border-radius: 2.375rem;\n  font-size: 0.8em;\n  background: ", ";\n  color: ", ";\n"])), function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.color;
});

var StepDescriptionStyled = _styledComponents.default.p(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-top: 0.75rem;\n  font-size: 0.9em;\n  color: ", ";\n"])), function (props) {
  return props.theme.color;
});

var ProgressBar = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  & {\n    position: relative;\n    width: 100%;\n    height: 0.3em;\n    border-radius: 2.375rem;\n    margin: 0 1em;\n    background: ", ";\n    ", "\n  }\n  ", "\n  }\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.background;
}, function (props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n        width: 0.3em;\n        height: 100%;\n        margin: 1em 0;\n      "])));
}, function (props) {
  return (props.isStepInProgress || props.isStepCompleted) && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n      &:after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: ", ";\n        height: 100%;\n        border-radius: 2.375rem;\n        background: ", ";\n        animation: ", "\n          1s ease;\n      }\n    "])), function (props) {
    return props.isStepInProgress ? "50%" : "100%";
  }, function (props) {
    return props.theme.fill;
  }, function (props) {
    return props.isStepInProgress ? progressBarAnimation : completedBarAnimation;
  });
}, function (props) {
  return props.isStepInProgress && props.vertical && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n      &:after {\n        width: 100%;\n        height: 50%;\n        animation: ", " 1s ease;\n      }\n    "])), progressBarVerticalAnimation);
}, function (props) {
  return props.isStepCompleted && props.vertical && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n      &:after {\n        animation: ", " 1s ease;\n      }\n    "])), completedProgressBarVerticalAnimation);
});

var useStepper = function useStepper(defaultValue, numberOfSteps) {
  var _useState = (0, _react.useState)(defaultValue || 0),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var goToStep = function goToStep(stepNumber) {
    if (stepNumber >= 0 && stepNumber <= numberOfSteps) setStep(stepNumber);
  };

  var incrementStep = function incrementStep() {
    if (step < numberOfSteps) {
      setStep(function (prevState) {
        return prevState + 1;
      });
    }
  };

  var decrementStep = function decrementStep() {
    if (step !== 0) {
      setStep(function (prevState) {
        return prevState - 1;
      });
    }
  };

  return {
    step: step,
    goToStep: goToStep,
    incrementStep: incrementStep,
    decrementStep: decrementStep
  };
};

exports.useStepper = useStepper;

var StepNumber = function StepNumber(props) {
  var text = props.text,
      currentStep = props.currentStep,
      theme = props.theme;
  return /*#__PURE__*/_react.default.createElement(StepNumberStyled, {
    theme: theme.stepNumber,
    className: "step-number"
  }, "".concat(text || "STEP", " ").concat(currentStep));
};

exports.StepNumber = StepNumber;

var StepTitle = function StepTitle(props) {
  var theme = props.theme;
  return /*#__PURE__*/_react.default.createElement(StepTitleStyled, {
    theme: theme.title,
    className: "title"
  }, props.children);
};

exports.StepTitle = StepTitle;

var StepStatus = function StepStatus(props) {
  var isStepInProgress = props.isStepInProgress,
      isStepCompleted = props.isStepCompleted,
      isStepPending = props.isStepPending,
      textProgress = props.textProgress,
      textCompleted = props.textCompleted,
      textPending = props.textPending,
      theme = props.theme;

  var getText = function getText() {
    var text;

    if (isStepInProgress) {
      text = textProgress || "In progress";
    }

    if (isStepCompleted) {
      text = textCompleted || "Completed";
    }

    if (isStepPending) {
      text = textPending || "Pending";
    }

    return text;
  };

  return /*#__PURE__*/_react.default.createElement(StepStatusStyled, {
    theme: theme.status,
    className: "status"
  }, getText());
};

exports.StepStatus = StepStatus;

var StepDescription = function StepDescription(props) {
  var theme = props.theme;
  return /*#__PURE__*/_react.default.createElement(StepDescriptionStyled, {
    theme: theme.description,
    className: "description"
  }, props.children);
};

exports.StepDescription = StepDescription;

var CheckMark = function CheckMark(props) {
  var theme = props.theme;
  return /*#__PURE__*/_react.default.createElement(AnimationCheckMark, {
    className: "animation-check-mark"
  }, /*#__PURE__*/_react.default.createElement(CheckMarkStyled, {
    theme: theme,
    className: "check-mark"
  }, /*#__PURE__*/_react.default.createElement(SaIcon, {
    theme: theme,
    className: "sa-icon"
  }, /*#__PURE__*/_react.default.createElement(SaTip, {
    theme: theme,
    className: "sa-line sa-tip"
  }), /*#__PURE__*/_react.default.createElement(SaLong, {
    theme: theme,
    className: "sa-line sa-long"
  }), /*#__PURE__*/_react.default.createElement(SaPlaceholder, {
    className: "sa-placeholder"
  }), /*#__PURE__*/_react.default.createElement(SaFix, {
    theme: theme,
    className: "sa-fix"
  }))));
};

var Step = function Step(props) {
  var currentStep = props.currentStep,
      isLastStep = props.isLastStep,
      isStepInProgress = props.isStepInProgress,
      isStepCompleted = props.isStepCompleted,
      isStepPending = props.isStepPending,
      vertical = props.vertical,
      numbered = props.numbered,
      disableAnimation = props.disableAnimation,
      customContent = props.customContent,
      theme = props.theme;
  var status = isStepInProgress ? "progress" : isStepCompleted ? "completed" : "pending";
  var CustomContent = customContent;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StepStyled, {
    isStepInProgress: isStepInProgress,
    isStepCompleted: isStepCompleted,
    theme: theme.step[status],
    className: "step ".concat(isStepInProgress ? "progress" : "", "\n      ").concat(isStepCompleted ? "completed" : "", " ").concat(isStepPending ? "pending" : "")
  }, !customContent ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (!isStepCompleted || disableAnimation) && numbered && /*#__PURE__*/_react.default.createElement(Number, {
    className: "number"
  }, currentStep), isStepCompleted && !disableAnimation && /*#__PURE__*/_react.default.createElement(CheckMark, {
    theme: theme.checkMark
  })) : /*#__PURE__*/_react.default.createElement(CustomContent, null), /*#__PURE__*/_react.default.createElement(Content, {
    isLastStep: isLastStep,
    vertical: vertical,
    className: "content ".concat(isLastStep ? "last" : "")
  }, props.children && (props.children.constructor === Array ? props.children.map(function (children, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/(0, _react.cloneElement)(children, {
      currentStep: currentStep,
      isStepInProgress: isStepInProgress,
      isStepCompleted: isStepCompleted,
      isStepPending: isStepPending,
      theme: theme.content[status]
    }));
  }) : /*#__PURE__*/(0, _react.cloneElement)(props.children, {
    currentStep: currentStep,
    isStepInProgress: isStepInProgress,
    isStepCompleted: isStepCompleted,
    isStepPending: isStepPending,
    theme: theme.content[status]
  })))), !isLastStep && /*#__PURE__*/_react.default.createElement(ProgressBar, {
    isStepInProgress: isStepInProgress,
    isStepCompleted: isStepCompleted,
    vertical: vertical,
    theme: theme.progressBar[status],
    className: "progress-bar ".concat(isStepInProgress ? "progress" : "", "\n          ").concat(isStepCompleted ? "completed" : "", " ").concat(isStepPending ? "pending" : "")
  }));
};

exports.Step = Step;

var Stepper = function Stepper(props) {
  var _props$step = props.step,
      step = _props$step === void 0 ? 0 : _props$step,
      _props$vertical = props.vertical,
      vertical = _props$vertical === void 0 ? false : _props$vertical,
      _props$dark = props.dark,
      dark = _props$dark === void 0 ? false : _props$dark,
      _props$numbered = props.numbered,
      numbered = _props$numbered === void 0 ? true : _props$numbered,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? {
    light: {
      checkMark: {
        fillColor: "#23c275",
        fillIconColor: "#ffffff"
      },
      step: {
        pending: {
          background: "#ededed",
          color: "#a1a3a7"
        },
        progress: {
          background: "#3c3fed",
          color: "#ffffff"
        },
        completed: {
          background: "#23c275",
          color: "#ffffff"
        }
      },
      content: {
        pending: {
          stepNumber: {
            color: "#a1a3a7"
          },
          title: {
            color: "#a1a3a7"
          },
          status: {
            background: "#f2f2f2",
            color: "#a1a3a7"
          },
          description: {
            color: "#a1a3a7"
          }
        },
        progress: {
          stepNumber: {
            color: "#131b26"
          },
          title: {
            color: "#131b26"
          },
          status: {
            background: "#e7e9fd",
            color: "#3c3fed"
          },
          description: {
            color: "#131b26"
          }
        },
        completed: {
          stepNumber: {
            color: "#131b26"
          },
          title: {
            color: "#131b26"
          },
          status: {
            background: "#e9faf2",
            color: "#23c275"
          },
          description: {
            color: "#131b26"
          }
        }
      },
      progressBar: {
        pending: {
          background: "#ededed"
        },
        progress: {
          background: "#e7e9fd",
          fill: "#3c3fed"
        },
        completed: {
          background: "#e9faf2",
          fill: "#23c275"
        }
      }
    },
    dark: {
      checkMark: {
        fillColor: "#23c275",
        fillIconColor: "#ffffff"
      },
      step: {
        pending: {
          background: "#1a1a1a",
          color: "#767676"
        },
        progress: {
          background: "#19b6fe",
          color: "#ffffff"
        },
        completed: {
          background: "#23c275",
          color: "#ffffff"
        }
      },
      content: {
        pending: {
          stepNumber: {
            color: "#767676"
          },
          title: {
            color: "#767676"
          },
          status: {
            background: "#1a1a1a",
            color: "#767676"
          },
          description: {
            color: "#767676"
          }
        },
        progress: {
          stepNumber: {
            color: "#ece4d9"
          },
          title: {
            color: "#ece4d9"
          },
          status: {
            background: "#08374c",
            color: "#19b6fe"
          },
          description: {
            color: "#ece4d9"
          }
        },
        completed: {
          stepNumber: {
            color: "#ece4d9"
          },
          title: {
            color: "#ece4d9"
          },
          status: {
            background: "#0b3a23",
            color: "#23c275"
          },
          description: {
            color: "#ece4d9"
          }
        }
      },
      progressBar: {
        pending: {
          background: "#1a1a1a"
        },
        progress: {
          background: "#08374c",
          fill: "#19b6fe"
        },
        completed: {
          background: "#0b3a23",
          fill: "#23c275"
        }
      }
    }
  } : _props$theme;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_fonts.default, null), /*#__PURE__*/_react.default.createElement(StepperStyled, {
    vertical: vertical,
    className: "stepper ".concat(vertical ? "vertical" : "", " ").concat(dark ? "dark" : "")
  }, props.children && props.children.constructor === Array && props.children.map(function (children, i) {
    var isLastStep = props.children.length - 1 === i;
    var isStepInProgress = step === i;
    var isStepCompleted = step > i;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/(0, _react.cloneElement)(children, {
      currentStep: i + 1,
      isLastStep: isLastStep,
      isStepInProgress: isStepInProgress,
      isStepCompleted: isStepCompleted,
      isStepPending: !isStepInProgress && !isStepCompleted,
      vertical: vertical,
      numbered: numbered,
      theme: theme[dark ? "dark" : "light"]
    }));
  })));
};

exports.Stepper = Stepper;