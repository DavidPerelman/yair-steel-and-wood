"use client";

import styles from "./newProject.module.css";
import MultistepForm from "@/components/multistepForm/MultistepForm";

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
