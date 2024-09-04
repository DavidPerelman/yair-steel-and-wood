import React, { useState } from "react";
import styles from "./multistepForm.module.css";
import FormWrapper from "../formWrapper/FormWrapper";

const MultistepForm = () => {
  return (
    <div className={styles.container}>
      <FormWrapper />
    </div>
  );
};

export default MultistepForm;
