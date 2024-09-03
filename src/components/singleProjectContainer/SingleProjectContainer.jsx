"use client";

import styles from "./singleProjectContainer.module.css";
import ImagesCarousel from "../imagesCarousel/ImagesCarousel";
import Link from "next/link";

const SingleProjectContainer = ({ project }) => {
  return (
    <div className={styles.content}>
      <div className={styles.leftCol}>
        <div className={`${styles.leftPanel} ${styles.panel}`}>
          <h1>{project.title}</h1>
          <h3>{project.price} ש״ח</h3>
          <p className={styles.description}>{project.description}</p>
          <div>
            מידות -
            <br />
            אורך - {project.size.length} ס״מ
            <br />
            רוחב - {project.size.width} ס״מ
            <br />
            גובה - {project.size.heigth} ס״מ
          </div>
        </div>
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
