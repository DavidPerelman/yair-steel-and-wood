"use client";

import Link from "next/link";
import styles from "./projectsContainer.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import { useState } from "react";

const ProjectsContainer = ({ projects, link }) => {
  const [showItems, setShowItems] = useState(6);

  const handleShowMore = () => {
    setShowItems((prevShowItems) =>
      prevShowItems >= projects.length ? prevShowItems : prevShowItems + 4
    );
  };

  const displayedItems = projects.slice(0, showItems).map((project) => (
    <Link href={`${link}${project.slug}`} key={project.slug}>
      <ProjectCard project={project} />
    </Link>
  ));

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.boxContainer}>{displayedItems}</div>
      {showItems < projects.length ? (
        <button className={styles.showMoreBtn} onClick={handleShowMore}>
          <h2>טען עוד</h2>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProjectsContainer;
