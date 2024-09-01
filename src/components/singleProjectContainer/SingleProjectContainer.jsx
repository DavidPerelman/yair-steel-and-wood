"use client";

import Image from "next/image";
import styles from "./singleProjectContainer.module.css";
import ImagesCarousel from "../imagesCarousel/ImagesCarousel";

const SingleProjectContainer = ({ project }) => {
  console.log(project);

  return (
    <div className={styles.content}>
      <div className={styles.leftCol}>
        <div className={`${styles.leftPanel} ${styles.panel}`}></div>
      </div>
      <div className={styles.rightCol}>
        <div className={`${styles.rightPanel} ${styles.panel}`}>
          <ImagesCarousel slides={project.images} />
        </div>
      </div>
    </div>
  );
};

export default SingleProjectContainer;
