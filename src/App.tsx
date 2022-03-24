import { useReducer } from "react";
import { StepOne, StepTwo, Bonus } from "./components";
import { STEPS, COLORS } from "./constants";
import styled from "styled-components";

const initialState = { step: STEPS.STEP_BONUS };

type State = {
  step: string;
};

type Action = {
  type: string;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case STEPS.STEP_BONUS:
      return { step: STEPS.STEP_BONUS };
    case STEPS.STEP_ONE:
      return { step: STEPS.STEP_ONE };
    case STEPS.STEP_TWO:
      return { step: STEPS.STEP_TWO };
    case STEPS.STEP_FINAL:
      return { step: STEPS.STEP_FINAL };
    default:
      throw new Error();
  }
}

const AppContainer = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${COLORS.color1};
  color: ${COLORS.color3};
  padding: 5px;
`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { step } = state;

  const renderStep = () => {
    if (step === STEPS.STEP_BONUS) {
      return (
        <Bonus onNextStepClick={() => dispatch({ type: STEPS.STEP_ONE })} />
      );
    }

    if (step === STEPS.STEP_ONE) {
      return (
        <StepOne
          onPreviousStepClick={() => dispatch({ type: STEPS.STEP_BONUS })}
          onNextStepClick={() => dispatch({ type: STEPS.STEP_TWO })}
        />
      );
    }

    if (step === STEPS.STEP_TWO) {
      return (
        <StepTwo
          onPreviousStepClick={() => dispatch({ type: STEPS.STEP_ONE })}
          onNextStepClick={() => dispatch({ type: STEPS.STEP_FINAL })}
        />
      );
    }

    if (step === STEPS.STEP_FINAL) {
      localStorage.removeItem("formData");
      return <>You finished the form</>;
    }
  };

  return <AppContainer>{renderStep()}</AppContainer>;
};

export default App;
