"use client";

import MultistepForm from "@/components/multistepForm/MultistepForm";
import styles from "./newProject.module.css";

const NewProjectPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.NewProjectPage}>
        <MultistepForm />
      </div>
    </div>
  );
};

export default NewProjectPage;
