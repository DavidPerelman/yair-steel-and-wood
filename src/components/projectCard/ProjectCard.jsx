"use client";

import Image from "next/image";
import styles from "./projectCard.module.css";

const ProjectCard = ({ project }) => {
  console.log(project);

  return (
    <div key={project.slug} className={styles.box}>
      <div className={styles.boxImgContainer}>
        <Image
          src={project.thumbnail.secure_url}
          alt=""
          fill
          className={styles.boxImg}
        />
      </div>
      <h2>{project.title}</h2>
    </div>
  );
};

export default ProjectCard;
