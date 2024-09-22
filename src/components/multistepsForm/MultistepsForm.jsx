import FormWrapper from "../formWrapper/FormWrapper";
import styles from "./multistepsForm.module.css";

const MultistepsForm = async ({ divisions, materials }) => {
  return (
    <div className={styles.container}>
      <FormWrapper divisions={divisions} materials={materials} />
    </div>
  );
};

export default MultistepsForm;
