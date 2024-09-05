// "use client";

import { getDivisions, getMaterials } from "@/lib/data";
import FormWrapper from "../formWrapper/FormWrapper";
import styles from "./multistepsForm.module.css";

const MultistepsForm = async () => {
  const divisions = await getDivisions();
  const materials = await getMaterials();

  return (
    <div className={styles.container}>
      <FormWrapper divisions={divisions} materials={materials} />
    </div>
  );
};

export default MultistepsForm;
