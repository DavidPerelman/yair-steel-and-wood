"use client";

import Image from "next/image";
import styles from "./projectCard.module.css";
import { boxClickHandler } from "@/lib/action";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.slug}
      className={styles.box}
      onClick={() => boxClickHandler(project.slug)}
    >
      <div className={styles.boxImgContainer}>
        <Image src={project.thumbnail} alt="" fill className={styles.boxImg} />
      </div>
      <h2>כותרת לדוגמא</h2>
    </div>
  );
};

export default ProjectCard;
