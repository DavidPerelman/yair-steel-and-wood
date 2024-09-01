"use client";

import Image from "next/image";
import styles from "./singleProjectContainer.module.css";
import ImagesCarousel from "../imagesCarousel/ImagesCarousel";
import Link from "next/link";

const SingleProjectContainer = ({ project }) => {
  return (
    <div className={styles.content}>
      <div className={styles.leftCol}>
        <div className={`${styles.leftPanel} ${styles.panel}`}>
          <h1>{project.description}</h1>
          <h3>
            {project.price} {String.fromCharCode(0x20aa)}
          </h3>
          <Link href="/" className={styles.links}>
            <h4>עציצים</h4>
          </Link>
          <Link href="/" className={styles.links}>
            <h4>עץ</h4>
          </Link>
          <p>{project.description}</p>
          <h3 className={styles.size_header}>{project.size}</h3>
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
