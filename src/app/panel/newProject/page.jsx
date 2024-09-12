"use client";

import styles from "./newProject.module.css";
import MultistepsForm from "@/components/multistepsForm/MultistepsForm";

const NewProjectPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.NewProjectPage}>
        <MultistepsForm />
      </div>
    </div>
  );
};

export default NewProjectPage;
