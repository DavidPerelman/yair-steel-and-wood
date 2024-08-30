import Link from "next/link";
import styles from "./projectsContainer.module.css";
import ProjectCard from "../projectCard/ProjectCard";

const ProjectsContainer = async ({ projects, link }) => {
  return (
    <div className={styles.boxContainer}>
      {projects.map((project) => (
        <Link href={`${link}${project.slug}`} key={project.slug}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectsContainer;
