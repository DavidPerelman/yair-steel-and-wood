import React from "react";
import styles from "./multistepForm.module.css";
import { useMultistepForm } from "@/hooks/useMultistepForm";

const MultistepForm = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.steps}>
          {steps.length} / {currentStepIndex + 1}
        </div>
        {step}
        <div className={styles.buttons}>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {
            <button type="button" onClick={next}>
              {isLastStep ? "Finish" : "Next"}
            </button>
          }
        </div>
      </form>
    </div>
  );
};

export default MultistepForm;
