"use client";

import Image from "next/image";
import styles from "./singleProjectContainer.module.css";

const SingleProjectContainer = ({ project }) => {
  console.log(project);

  return (
    <div className={styles.content}>
      <div
        id={styles.homeContentContainer}
        className={styles.homeContentContainer}
      >
        <div className={styles.leftCol}>
          <div className={`${styles.leftPanel} ${styles.panel}`}></div>
        </div>
        <div className={styles.rightCol}>
          <div className={`${styles.rightPanel} ${styles.panel}`}></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectContainer;
