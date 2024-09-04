import React, { useState } from "react";
import styles from "./multistepForm.module.css";
import FormWrapper from "../formWrapper/FormWrapper";

const MultistepForm = () => {
  return (
    <div className={styles.container}>
      {/* <form onSubmit={onSubmit}>
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
          {<button type="submit">{isLastStep ? "Finish" : "Next"}</button>}
        </div>
      </form> */}
      <FormWrapper />
    </div>
  );
};

export default MultistepForm;
